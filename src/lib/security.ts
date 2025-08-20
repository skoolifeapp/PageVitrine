// Security utilities for input validation and client-side data protection

// Input validation patterns
const EMAIL_PATTERN = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const NAME_PATTERN = /^[a-zA-ZÀ-ÿ\s'-]{1,50}$/;
const TEXT_PATTERN = /^[a-zA-ZÀ-ÿ0-9\s'.,!?()-]{1,200}$/;

// Rate limiting storage
const RATE_LIMIT_KEY = 'skoolife_form_submissions';
const MAX_SUBMISSIONS_PER_HOUR = 5;

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateEmail = (email: string): ValidationResult => {
  if (!email || email.trim().length === 0) {
    return { isValid: false, error: 'Email is required' };
  }
  
  if (email.length > 254) {
    return { isValid: false, error: 'Email is too long' };
  }
  
  if (!EMAIL_PATTERN.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }
  
  return { isValid: true };
};

export const validateName = (name: string): ValidationResult => {
  if (!name || name.trim().length === 0) {
    return { isValid: false, error: 'Name is required' };
  }
  
  if (!NAME_PATTERN.test(name)) {
    return { isValid: false, error: 'Name contains invalid characters or is too long' };
  }
  
  return { isValid: true };
};

export const validateText = (text: string, fieldName: string, required: boolean = false): ValidationResult => {
  if (required && (!text || text.trim().length === 0)) {
    return { isValid: false, error: `${fieldName} is required` };
  }
  
  if (text && !TEXT_PATTERN.test(text)) {
    return { isValid: false, error: `${fieldName} contains invalid characters or is too long` };
  }
  
  return { isValid: true };
};

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript protocols
    .replace(/on\w+=/gi, '') // Remove event handlers
    .substring(0, 200); // Limit length
};

export const checkRateLimit = (): boolean => {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const submissions = stored ? JSON.parse(stored) : [];
    const oneHourAgo = Date.now() - (60 * 60 * 1000);
    
    // Filter out submissions older than 1 hour
    const recentSubmissions = submissions.filter((timestamp: number) => timestamp > oneHourAgo);
    
    if (recentSubmissions.length >= MAX_SUBMISSIONS_PER_HOUR) {
      return false; // Rate limit exceeded
    }
    
    return true;
  } catch (error) {
    console.error('Rate limit check error:', error);
    return true; // Allow on error
  }
};

export const recordSubmission = (): void => {
  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const submissions = stored ? JSON.parse(stored) : [];
    const oneHourAgo = Date.now() - (60 * 60 * 1000);
    
    // Filter out old submissions and add new one
    const recentSubmissions = submissions.filter((timestamp: number) => timestamp > oneHourAgo);
    recentSubmissions.push(Date.now());
    
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recentSubmissions));
  } catch (error) {
    console.error('Record submission error:', error);
  }
};

export const secureStorageSet = (key: string, value: any, expiryHours: number = 24): void => {
  try {
    const item = {
      value: value,
      timestamp: Date.now(),
      expiry: Date.now() + (expiryHours * 60 * 60 * 1000)
    };
    localStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error('Secure storage set error:', error);
  }
};

export const secureStorageGet = (key: string): any => {
  try {
    const stored = localStorage.getItem(key);
    if (!stored) return null;
    
    const item = JSON.parse(stored);
    
    // Check if expired
    if (Date.now() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    
    return item.value;
  } catch (error) {
    console.error('Secure storage get error:', error);
    return null;
  }
};

export const cleanupExpiredStorage = (): void => {
  try {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith('skoolife_')) {
        const stored = localStorage.getItem(key);
        if (stored) {
          try {
            const item = JSON.parse(stored);
            if (item.expiry && Date.now() > item.expiry) {
              localStorage.removeItem(key);
            }
          } catch {
            // Invalid format, remove it
            localStorage.removeItem(key);
          }
        }
      }
    });
  } catch (error) {
    console.error('Cleanup storage error:', error);
  }
};

// Simple bot detection
export const detectBot = (): boolean => {
  try {
    // Check for common bot user agents
    const userAgent = navigator.userAgent.toLowerCase();
    const botPatterns = ['bot', 'crawler', 'spider', 'scraper'];
    
    if (botPatterns.some(pattern => userAgent.includes(pattern))) {
      return true;
    }
    
    // Check for webdriver
    if (typeof (window as any).webdriver !== 'undefined') {
      return true;
    }
    
    // Check for phantom/headless
    if (typeof (window as any)._phantom !== 'undefined' || typeof (window as any).callPhantom !== 'undefined') {
      return true;
    }
    
    return false;
  } catch {
    return false;
  }
};

// Initialize cleanup on load
if (typeof window !== 'undefined') {
  cleanupExpiredStorage();
}
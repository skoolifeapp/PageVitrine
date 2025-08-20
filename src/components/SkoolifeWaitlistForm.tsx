import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { validateEmail, validateName, validateText, sanitizeInput, checkRateLimit, recordSubmission, secureStorageSet, secureStorageGet, detectBot } from "@/lib/security";

interface WaitlistData {
  email: string;
  firstName: string;
  country: string;
  school: string;
  studyYear: string;
  mainNeeds: string[];
  purchaseIntent: string;
  betaTester: boolean;
  privacyConsent: boolean;
  marketingOptIn: boolean;
  // Hidden fields
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  referrer: string;
  deviceType: string;
  locale: string;
  cookieConsentVersion: string;
  timestamp: number;
}

export const SkoolifeWaitlistForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<WaitlistData>({
    email: "",
    firstName: "",
    country: "",
    school: "",
    studyYear: "",
    mainNeeds: [],
    purchaseIntent: "",
    betaTester: false,
    privacyConsent: false,
    marketingOptIn: false,
    // Hidden fields with default values
    utmSource: new URLSearchParams(window.location.search).get('utm_source') || '',
    utmMedium: new URLSearchParams(window.location.search).get('utm_medium') || '',
    utmCampaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
    utmTerm: new URLSearchParams(window.location.search).get('utm_term') || '',
    utmContent: new URLSearchParams(window.location.search).get('utm_content') || '',
    referrer: document.referrer,
    deviceType: /Mobile|Android|iPhone|iPad/.test(navigator.userAgent) ? 'mobile' : 'desktop',
    locale: navigator.language,
    cookieConsentVersion: '1.0',
    timestamp: Date.now(),
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const needsOptions = [
    "Time management",
    "To-do",
    "Student finances", 
    "Motivation & focus",
    "All-in-one"
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Validate email
    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.error!;
    }
    
    // Validate first name if provided
    if (formData.firstName) {
      const nameValidation = validateName(formData.firstName);
      if (!nameValidation.isValid) {
        newErrors.firstName = nameValidation.error!;
      }
    }
    
    // Validate other text fields
    if (formData.country) {
      const countryValidation = validateText(formData.country, 'Country');
      if (!countryValidation.isValid) {
        newErrors.country = countryValidation.error!;
      }
    }
    
    if (formData.school) {
      const schoolValidation = validateText(formData.school, 'School');
      if (!schoolValidation.isValid) {
        newErrors.school = schoolValidation.error!;
      }
    }
    
    // Privacy consent is required
    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'Privacy consent is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Bot detection
    if (detectBot()) {
      setErrors({ general: 'Submission not allowed' });
      return;
    }
    
    // Rate limiting
    if (!checkRateLimit()) {
      setErrors({ general: 'Too many submissions. Please try again later.' });
      return;
    }
    
    if (!validateForm()) {
      return;
    }

    try {
      // Sanitize inputs before submission
      const sanitizedData = {
        email: sanitizeInput(formData.email),
        first_name: formData.firstName ? sanitizeInput(formData.firstName) : null,
        country: formData.country ? sanitizeInput(formData.country) : null,
        school: formData.school ? sanitizeInput(formData.school) : null,
        study_year: formData.studyYear ? sanitizeInput(formData.studyYear) : null,
        purchase_intent: formData.purchaseIntent ? parseInt(formData.purchaseIntent) : null,
        beta_optin: formData.betaTester,
        marketing_optin: formData.marketingOptIn,
        privacy_accepted: formData.privacyConsent,
        utm_source: formData.utmSource || null,
        utm_medium: formData.utmMedium || null,
        utm_campaign: formData.utmCampaign || null,
        utm_term: formData.utmTerm || null,
        utm_content: formData.utmContent || null,
        referrer: formData.referrer || null,
        device_type: formData.deviceType || null,
        locale: formData.locale || null,
      };
      
      const { error } = await supabase
        .from('waitlist')
        .insert([sanitizedData]);
      
      if (error) {
        throw error;
      }
      
      recordSubmission();
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Fallback: save to secure localStorage
      try {
        const existingData = secureStorageGet('skoolife-waitlist') || [];
        existingData.push({
          ...formData,
          submittedAt: new Date().toISOString()
        });
        secureStorageSet('skoolife-waitlist', existingData, 24);
        recordSubmission();
        setIsSubmitted(true);
      } catch (storageError) {
        console.error('Error saving to localStorage:', storageError);
        setErrors({ general: 'There was an error submitting your information. Please try again.' });
      }
    }
  };

  const handleNeedsChange = (need: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        mainNeeds: [...prev.mainNeeds, need]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        mainNeeds: prev.mainNeeds.filter(n => n !== need)
      }));
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto animate-fade-in">
        <CardContent className="pt-6 text-center">
          <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
            You're in! 
          </h3>
          <p className="text-muted-foreground font-body">
            Check your inbox to confirm your spot on the waitlist.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-heading text-center">Join the Skoolife Waitlist</CardTitle>
        <CardDescription className="text-center font-body">
          Be the first to know when we launch and get early access to beta features.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email - Required */}
          <div className="space-y-2">
            <Label htmlFor="email" className="font-body">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className={`font-body ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
              placeholder="your.email@example.com"
              required
            />
            {errors.email && (
              <p className="text-sm text-destructive font-body">{errors.email}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* First Name */}
            <div className="space-y-2">
              <Label htmlFor="firstName" className="font-body">First Name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                className="font-body"
                placeholder="Alex"
              />
            </div>

            {/* Country */}
            <div className="space-y-2">
              <Label htmlFor="country" className="font-body">Country</Label>
              <Input
                id="country"
                value={formData.country}
                onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                className="font-body"
                placeholder="Canada"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* School */}
            <div className="space-y-2">
              <Label htmlFor="school" className="font-body">School</Label>
              <Input
                id="school"
                value={formData.school}
                onChange={(e) => setFormData(prev => ({ ...prev, school: e.target.value }))}
                className="font-body"
                placeholder="University of Toronto"
              />
            </div>

            {/* Study Year */}
            <div className="space-y-2">
              <Label htmlFor="studyYear" className="font-body">Study Year</Label>
              <Select onValueChange={(value) => setFormData(prev => ({ ...prev, studyYear: value }))}>
                <SelectTrigger className="font-body">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="L1">L1</SelectItem>
                  <SelectItem value="L2">L2</SelectItem>
                  <SelectItem value="L3">L3</SelectItem>
                  <SelectItem value="M1">M1</SelectItem>
                  <SelectItem value="M2">M2</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Main Needs */}
          <div className="space-y-3">
            <Label className="font-body">Main Needs (select all that apply)</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {needsOptions.map((need) => (
                <div key={need} className="flex items-center space-x-2">
                  <Checkbox
                    id={need}
                    checked={formData.mainNeeds.includes(need)}
                    onCheckedChange={(checked) => handleNeedsChange(need, checked as boolean)}
                  />
                  <Label htmlFor={need} className="text-sm font-body cursor-pointer">
                    {need}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Purchase Intent */}
          <div className="space-y-2">
            <Label htmlFor="purchaseIntent" className="font-body">Purchase Intent (1-5 scale)</Label>
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, purchaseIntent: value }))}>
              <SelectTrigger className="font-body">
                <SelectValue placeholder="How likely are you to purchase?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 - Not likely</SelectItem>
                <SelectItem value="2">2 - Somewhat unlikely</SelectItem>
                <SelectItem value="3">3 - Neutral</SelectItem>
                <SelectItem value="4">4 - Likely</SelectItem>
                <SelectItem value="5">5 - Very likely</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Beta Tester */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="betaTester"
              checked={formData.betaTester}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, betaTester: checked as boolean }))}
            />
            <Label htmlFor="betaTester" className="text-sm font-body cursor-pointer">
              I'm interested in being a beta tester
            </Label>
          </div>

          {/* Privacy Consent - Required */}
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="privacyConsent"
                checked={formData.privacyConsent}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, privacyConsent: checked as boolean }))}
                className={errors.privacyConsent ? 'border-destructive' : ''}
                required
              />
              <Label htmlFor="privacyConsent" className="text-sm font-body cursor-pointer leading-tight">
                I agree to the privacy policy and terms of service *
              </Label>
            </div>
            {errors.privacyConsent && (
              <p className="text-sm text-destructive font-body">{errors.privacyConsent}</p>
            )}
          </div>

          {/* Marketing Opt-in */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="marketingOptIn"
              checked={formData.marketingOptIn}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, marketingOptIn: checked as boolean }))}
            />
            <Label htmlFor="marketingOptIn" className="text-sm font-body cursor-pointer">
              I'd like to receive updates about Skoolife (optional)
            </Label>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring font-body"
            size="lg"
          >
            Join the Waitlist
          </Button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-4 font-body">
          Your data is stored securely and will only be used to contact you about Skoolife.
        </p>
      </CardContent>
    </Card>
  );
};
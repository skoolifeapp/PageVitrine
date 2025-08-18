// Optimisations spécifiques pour site statique

// Pre-load des routes critiques
export const preloadCriticalRoutes = () => {
  if (typeof window !== 'undefined') {
    // Pre-load des composants critiques
    const routes = ['/waitlist'];
    routes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  }
};

// Lazy loading des images
export const setupImageLazyLoading = () => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    // Observer toutes les images avec data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

// Optimisation des performances au premier chargement
export const optimizeFirstLoad = () => {
  // Pre-connect aux domaines externes
  const preconnectDomains = [
    'https://unpkg.com',
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];

  preconnectDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    document.head.appendChild(link);
  });
};

// Service Worker pour cache statique (optionnel)
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    try {
      await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered successfully');
    } catch (error) {
      console.log('Service Worker registration failed');
    }
  }
};
// Performance monitoring utilities
/* global gtag */
export function track() {
  gtag('event', 'login');
}
export const measurePerformance = () => {
  if ('performance' in window) {
    // Measure First Contentful Paint (FCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const fcp = entries[0];
      console.log('First Contentful Paint:', fcp.startTime);
      
      // Track in analytics
      if (window.gtag) {
        gtag('event', 'performance', {
          event_category: 'Web Vitals',
          event_label: 'FCP',
          value: Math.round(fcp.startTime)
        });
      }
    }).observe({ entryTypes: ['paint'] });

    // Measure Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lcp = entries[entries.length - 1];
      console.log('Largest Contentful Paint:', lcp.startTime);
      
      if (window.gtag) {
        gtag('event', 'performance', {
          event_category: 'Web Vitals',
          event_label: 'LCP',
          value: Math.round(lcp.startTime)
        });
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      console.log('Cumulative Layout Shift:', clsValue);
      
      if (window.gtag) {
        gtag('event', 'performance', {
          event_category: 'Web Vitals',
          event_label: 'CLS',
          value: Math.round(clsValue * 1000) / 1000
        });
      }
    }).observe({ entryTypes: ['layout-shift'] });
  }
};

// Call this function when the app loads
export const initPerformanceMonitoring = () => {
  if (process.env.NODE_ENV === 'production') {
    measurePerformance();
  }
};
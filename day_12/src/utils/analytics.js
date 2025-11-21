import ReactGA from 'react-ga4';

const TRACKING_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-8CQKJZMZNT'; // Replace with your GA4 Measurement ID

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID, {
    debug: process.env.NODE_ENV === 'development',
  });
};

export const trackPageView = (path) => {
  ReactGA.send({ 
    hitType: 'pageview', 
    page: path,
    title: document.title
  });
};

export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label
  });
};

export const trackSocialLink = (platform) => {
  trackEvent('Social', 'Click', platform);
};

export const trackProjectClick = (projectName) => {
  trackEvent('Projects', 'Click', projectName);
};

export const trackDownload = (fileName) => {
  trackEvent('Downloads', 'Click', fileName);
};
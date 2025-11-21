import React from 'react';
import { Link } from 'react-router-dom';
import { trackSocialLink } from '../utils/analytics';
import BackToTop from './BackToTop';
import '../styles/Footer.css';

const Footer = () => {
  const handleSocialClick = (platform) => {
    trackSocialLink(platform);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Your Name. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="social-links">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => handleSocialClick('GitHub')}
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => handleSocialClick('LinkedIn')}
            >
              LinkedIn
            </a>
            <a 
              href="mailto:your.email@example.com"
              onClick={() => handleSocialClick('Email')}
            >
              Email
            </a>
          </div>
        </div>
      </footer>
      <BackToTop />
    </>
  );
};

export default Footer;
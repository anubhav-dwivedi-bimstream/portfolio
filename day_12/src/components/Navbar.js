import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuActive(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">YourName</Link>
        
        <ul className={`nav-menu ${isMenuActive ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={() => setIsMenuActive(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={() => setIsMenuActive(false)}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/projects" 
              className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
              onClick={() => setIsMenuActive(false)}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/blog" 
              className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
              onClick={() => setIsMenuActive(false)}
            >
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={() => setIsMenuActive(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
        
        <div className="nav-controls">
          <ThemeToggle />
          <div className="hamburger" onClick={toggleMenu}>
            <span className={`bar ${isMenuActive ? 'bar1' : ''}`}></span>
            <span className={`bar ${isMenuActive ? 'bar2' : ''}`}></span>
            <span className={`bar ${isMenuActive ? 'bar3' : ''}`}></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
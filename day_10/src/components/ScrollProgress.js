import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/ScrollProgress.css';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollProgress = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollProgress / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div 
      className="scroll-progress"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress / 100 }}
      transition={{ duration: 0.1 }}
      style={{ transformOrigin: 'left' }}
    />
  );
};

export default ScrollProgress;
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/AppLoading.css';

const AppLoading = () => {
  return (
    <motion.div 
      className="app-loading"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="loading-spinner"
        animate={{ 
          rotate: 360 
        }}
        transition={{
          rotate: {
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        <div className="spinner-inner"></div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Loading Portfolio...
      </motion.p>
    </motion.div>
  );
};

export default AppLoading;
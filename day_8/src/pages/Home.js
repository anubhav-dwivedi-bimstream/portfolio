import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import '../styles/Home.css';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <AnimatedSection className="home">
      <motion.section 
        className="hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>Hi, I'm Your Name</motion.h1>
        <motion.h2 variants={itemVariants}>Junior Web Developer</motion.h2>
        <motion.p variants={itemVariants}>
          Building modern web applications with React, JavaScript, and more.
        </motion.p>
        <motion.div 
          variants={itemVariants}
          className="hero-buttons"
        >
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </motion.div>
      </motion.section>
    </AnimatedSection>
  );
};

export default Home;
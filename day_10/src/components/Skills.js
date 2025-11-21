import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Node.js', level: 65 },
    { name: 'Git', level: 70 },
    { name: 'Responsive Design', level: 85 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section 
      className="skills"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 variants={itemVariants}>My Skills</motion.h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skill-item"
            variants={itemVariants}
          >
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <motion.div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
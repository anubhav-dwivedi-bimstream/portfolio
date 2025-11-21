import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { y: -10, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="project-image">
        <LazyLoadImage
          src={project.image}
          alt={project.title}
          effect="blur"
          placeholder={<div className="image-placeholder">Loading...</div>}
        />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={project.live} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
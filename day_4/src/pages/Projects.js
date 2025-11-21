import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A responsive dashboard for e-commerce analytics built with React and Chart.js",
      image: "https://via.placeholder.com/400x250",
      technologies: ["React", "Chart.js", "CSS"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A Kanban-style task manager with drag-and-drop functionality",
      image: "https://via.placeholder.com/400x250",
      technologies: ["React", "Redux", "Firebase"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "Real-time weather information with location-based forecasts",
      image: "https://via.placeholder.com/400x250",
      technologies: ["JavaScript", "API", "CSS"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "This very portfolio website built with React and modern CSS",
      image: "https://via.placeholder.com/400x250",
      technologies: ["React", "CSS", "JavaScript"],
      github: "#",
      live: "#"
    }
  ]);

  return (
    <div className="projects">
      <section className="projects-hero">
        <h1>My Projects</h1>
        <p>A showcase of my recent work and ongoing projects</p>
      </section>
      
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
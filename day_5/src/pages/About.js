import React from 'react';
import Skills from '../components/Skills';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About Me</h1>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate junior web developer with experience in building 
              responsive and user-friendly web applications. I love turning complex 
              problems into simple, beautiful designs.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or writing technical blog posts.
            </p>
          </div>
          <div className="about-image">
            <img src="https://via.placeholder.com/300x300" alt="Anubhav Dwivedi" />
          </div>
        </div>
      </section>
      
      <Skills />
    </div>
  );
};

export default About;
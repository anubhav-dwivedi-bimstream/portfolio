import React from 'react';
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

  return (
    <section className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
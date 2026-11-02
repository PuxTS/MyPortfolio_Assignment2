/* 
 * File: Projects.jsx
 * Description: Displays portfolio project cards with custom thumbnails and role outcomes.
 */

import React from 'react';
import './Projects.css';

export default function Projects() {
  // Array of highlighted showcase projects
  const projectList = [
    {
      title: "ShapeBound Game Project",
      image: "/ShapeBound.jpg",
      role: "Lead Gameplay & Systems Developer",
      outcome: "Engineered responsive wall-sticking mechanics and physics interaction scripts in C#."
    },
    {
      title: "Web Game - Bug Catcher",
      image: "/BugCatcher.jpg",
      role: "Frontend JavaScript Developer",
      outcome: "Built a timed browser game with dynamic score tracking and logic-first game state management."
    },
    {
      title: "Shovel Jam 2025 Web Game",
      image: "/InboundShovel.png",
      role: "Solo Developer",
      outcome: "Developed and published a playable web game on Itch.io within a strict 9-day game jam deadline."
    }
  ];

  return (
    <div className="projects-container">
      <h2>Highlighted Projects</h2>
      
      {/* Project Grid */}
      <section className="projects-grid">
        {projectList.map((project, idx) => (
          <article key={idx} className="project-card">
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p><strong>Role:</strong> {project.role}</p>
            <p><strong>Outcome:</strong> {project.outcome}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
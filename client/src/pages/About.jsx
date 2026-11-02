/* 
 * File: About.jsx
 * Description: Renders student bio, profile photograph, and PDF resume link.
 */

import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>

      {/* Profile Photo */}
      <img 
        src="/Mugshot.jpg" 
        alt="Profile" 
        className="about-profile-img" 
      />

      <h3 className="about-name">Robert Morada</h3>
      <p className="about-subtitle">Game Programming Student</p>

      {/* Bio Section */}
      <div className="about-bio">
        <p>
          Hello! I am Robert Morada, a game programming student specializing in C# game engines, core gameplay physics, and custom mechanics. I pair technical logic and software architecture with intuitive UI/UX design to build responsive web apps and interactive games.
        </p>
      </div>

      {/* PDF Resume Link */}
      <a 
        href="/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="resume-button"
      >
        View My Resume (PDF)
      </a>
    </div>
  );
}
/* 
 * File: Education.jsx
 * Description: Lists diploma info, academic institution, and relevant completed coursework.
 */

import React from 'react';
import './Education.css';

export default function Education() {
  const courses = [
    "Web Interface Design",
    "Client-Side Web Development",
    "Web Application Development",
    "Database Concepts (SQL)",
    "Unix/Linux OS",
    "Software Requirements",
    "Software System Design",
    "Python Programming",
    "C# Programming",
    "Java Programming",
    "2D Games with Unity & C#",
    "Assets for Game Developers",
    "Game & Simulation"
  ];

  return (
    <div className="education-container">
      <h2 style={{ textAlign: 'center' }}>Education & Qualifications</h2>

      {/* Program Header */}
      <div className="education-header">
        <div className="education-title-group">
          <h3 className="program-name">Game - Programming Advanced Diploma</h3>
          <p className="school-name">Centennial College, Toronto, ON</p>
        </div>
        <span className="education-date">Sept. 2025 - Present</span>
      </div>

      {/* Coursework Grid */}
      <h3 className="coursework-title">Relevant Coursework</h3>
      <div className="coursework-grid">
        {courses.map((course, idx) => (
          <div key={idx} className="course-card">
            {course}
          </div>
        ))}
      </div>
    </div>
  );
}
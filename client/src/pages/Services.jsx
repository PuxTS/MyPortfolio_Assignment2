/* 
 * File: Services.jsx
 * Description: Outlines offered services across game mechanics, frontend, and backend development.
 */

import React from 'react';
import './Services.css';

export default function Services() {
  const servicesList = [
    {
      title: "Game Development & Mechanics",
      description: "Engineering custom player physics, combat logic, game loops, and UI architecture in C# and Unity."
    },
    {
      title: "Frontend Web Development",
      description: "Building responsive, modern user interfaces and interactive web applications using React, HTML5, CSS, and JavaScript."
    },
    {
      title: "Backend & Database Management",
      description: "Designing structured database schemas, executing SQL queries, and configuring automated server scripts and APIs."
    }
  ];

  return (
    <div className="services-container">
      <h2>Services Offered</h2>
      
      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
/* 
 * File: Home.jsx
 * Description: Landing page highlighting key developer focus and quick navigation CTAs.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-content">
        <span className="hero-badge">Game Programming</span>
        <h1 className="hero-title">
          Designing Interactive Worlds & Mechanics
        </h1>
        <p className="hero-mission">
          <strong>Mission Statement:</strong> Dedicated to building engaging game loops, responsive physics mechanics, and intuitive player experiences.
        </p>
        <div className="hero-actions">
          <Link to="/about" className="btn btn-primary">Learn More About Me</Link>
          <Link to="/projects" className="btn btn-secondary">View Projects</Link>
        </div>
      </div>
    </div>
  );
}
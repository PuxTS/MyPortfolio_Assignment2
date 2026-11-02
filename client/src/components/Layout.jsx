import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        {/* Requirement 1b: Primitive Shape Logo */}
        <div style={{ width: '25px', height: '25px', backgroundColor: '#007bff', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>My Portfolio</h1>
      </div>

      {/* Requirement 1a: Navigation scheme */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/projects">Projects</Link> | <Link to="/education">Education</Link> | <Link to="/services">Services</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <hr />
    </header>
  );
}
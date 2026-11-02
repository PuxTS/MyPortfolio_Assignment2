/* 
 * File: MainRouter.jsx
 * Description: Configures client-side page routing and wraps views in the primary Layout.
 */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Services from './pages/Services';
import Contact from './pages/Contact';

const MainRouter = () => {
  return (
    <div>
      {/* Persistent Navigation Header */}
      <Layout />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default MainRouter;
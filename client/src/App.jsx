/* 
 * File: App.jsx
 * Description: Main entry component wrapping the application with React Router.
 */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './MainRouter';

const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
};

export default App;
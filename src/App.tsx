import React, { ReactElement } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Documentation from './components/Documentation';
import Progress from './components/Progress';
import Credits from './components/Credits';

function App(): ReactElement {
  return (
    <div className="App">
      <Router basename="/Website">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React, { ReactElement } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Documentation from './components/Documentation';
import Credits from './components/Credits';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const devBuild = true;

function App(): ReactElement {
  return (
    <div className="App">
      <Router basename={devBuild ? '/' : '/Website'}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

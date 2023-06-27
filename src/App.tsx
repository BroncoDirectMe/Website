import React, { ReactElement } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Documentation from './components/Documentation';
import Credits from './components/Credits';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(): ReactElement {
  // if using custom domain set basename to '/' for custom
  // if using github's domain set basename to '/<repo-name>'
  return (
    <div className="App">
      <Router basename={'/'}>
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

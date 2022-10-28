import React, { ReactElement } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App(): ReactElement {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

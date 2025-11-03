
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './components/Home';

import About from './components/About';

import Admin from './components/Admin';

import Login from './components/Login';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Login/>} />
          <Route path="/wishlist" element={<Home/>} />
          <Route path="/categoria/:slug" element={<Home/>} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;

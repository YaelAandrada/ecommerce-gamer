
import React from 'react';

import { BrowserRouter as router, route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './components/Home';

import about from './components/About';

import Admin from './components/Admin';

import Login from './components/Login';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Router>
          <Route path="/" element={<Home/>} />
          <Route path="/" element={<About/>} />
          <Route path="/" element={<Admin/>} />
          <Route path="/" element={<Login/>} />
        </Router>

      </div>
    </Router>
  );
};

export default App;

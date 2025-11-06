<<<<<<< HEAD

import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './components/Home';

import About from './components/About';

import Admin from './components/Admin';

import Login from './components/Login';

=======
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nosotros from './page/nosotros'
>>>>>>> ac8668fd5ebc56e4092ca4591816981c7242a734

function App() {

  return (
<<<<<<< HEAD
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
=======
   <BrowserRouter>
      <Routes>
        {/* Rutas de la aplicación */}
        <Route
          path="/"
          element={
            
            <div>
              <p>Hola</p>
            </div>
          }
        />

        <Route path="/nosotros" element={<Nosotros />} />

        {/* Página de error 404 */}
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
    </BrowserRouter>
>>>>>>> ac8668fd5ebc56e4092ca4591816981c7242a734

export default App;

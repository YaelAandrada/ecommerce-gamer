<<<<<<< HEAD
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
=======
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';
import AuthModal from './components/AuthModal';
>>>>>>> login/register

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalView, setModalView] = useState('login');

  const abrirModalLogin = () => {
    setModalView('login');
    setShowModal(true);
  };

  const abrirModalRegister = () => {
    setModalView('register');
    setShowModal(true);
  };

  const handleLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setShowModal(false);
  };

  const handleRegister = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setShowModal(false);
  };

  return (
<<<<<<< HEAD
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
=======
    <Router>
      <div className="App relative">
        {/* Modal */}
        {showModal && (
          <AuthModal
            view={modalView}
            onLogin={handleLogin}
            onRegister={handleRegister}
          />
        )}

        {/* Rutas */}
        <Routes>
          <Route path="/login" element={<Login abrirModalLogin={abrirModalLogin} />} />
          <Route path="/register" element={<Register abrirModalRegister={abrirModalRegister} />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedAdminRoute>
                <Dashboard />
              </ProtectedAdminRoute>
            }
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>

        <ToastContainer position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;
>>>>>>> login/register

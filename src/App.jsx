import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import AuthModal from './components/AuthModal';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';

import Home from './pages/Home';
import About from './components/About';
import Admin from './components/Admin';
import Nosotros from './page/Nosotros';


function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [authView, setAuthView] = useState('login'); // 'login' o 'register'

  const openAuthModal = (mode) => {
    setAuthView(mode);
    setModalOpen(true);
  };

  const closeAuthModal = () => {
    setModalOpen(false);
  };

  const handleLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setModalOpen(false);
  };

  const handleRegister = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setModalOpen(false);
  };

  return (
    <Router>
      <div className="App relative">
        <Navbar onAuthClick={openAuthModal} />

        <AuthModal
          view={authView}
          onLogin={handleLogin}
          onRegister={handleRegister}
          isOpen={isModalOpen}
          onClose={closeAuthModal}
        />

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/wishlist" element={<Home />} />
          <Route path="/categoria/:slug" element={<Home />} />

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
              </ProtectedAdminRoute>
            }
          />
        </Routes>

        <ToastContainer position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;
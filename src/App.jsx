import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Componentes
import Navbar from './components/Navbar';
import AuthModal from './components/AuthModal';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';

// Páginas
import Home from './pages/Home';
import About from './components/About';
import Admin from './components/Admin';
import Nosotros from './page/nosotros';
import Login from './pages/Login';
import Register from './pages/Register';
import { Dashboard } from './pages/Dashboard';

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
    <Router>
      <div className="App relative">
        <Navbar />

        {/* Modal de autenticación */}
        {showModal && (
          <AuthModal
            view={modalView}
            onLogin={handleLogin}
            onRegister={handleRegister}
          />
        )}

        <Routes>
          {/* Públicas */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/login" element={<Login abrirModalLogin={abrirModalLogin} />} />
          <Route path="/register" element={<Register abrirModalRegister={abrirModalRegister} />} />
          <Route path="/wishlist" element={<Home />} />
          <Route path="/categoria/:slug" element={<Home />} />

          {/* Protegidas */}
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
        </Routes>

        <ToastContainer position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;
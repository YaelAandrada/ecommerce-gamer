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
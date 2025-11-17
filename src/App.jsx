import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Nosotros from "./page/Nosotros";
import Login from "./components/Login";
import Register from "./components/RegisterForm";
import Home from "./components/Home";
import Administrador from './page/Administrador';
import FormularioJuegos from "./components/FormularioJuegos";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import AuthModal from "./components/AuthModal";
import { ToastContainer } from "react-toastify";

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const [modalView, setModalView] = React.useState("login");

  const abrirModalLogin = () => {
    setShowModal(true);
    setModalView("login");
  };

  const abrirModalRegister = () => {
    setShowModal(true);
    setModalView("register");
  };

  const handleLogin = () => setShowModal(false);
  const handleRegister = () => setShowModal(false);

  return (
    <div className="App relative">
      <Navbar />

      {showModal && (
        <AuthModal
          view={modalView}
          onLogin={handleLogin}
          onRegister={handleRegister}
        />
      )}

      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route
          path="/login"
          element={<Login abrirModalLogin={abrirModalLogin} />}
        />
        <Route path="/admin" element={<Administrador />} />
        <Route
          path="/register"
          element={<Register abrirModalRegister={abrirModalRegister} />}
        />
        <Route path="/wishlist" element={<Home />} />
        <Route path="/categoria/:slug" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/formulario" element={<FormularioJuegos />} />

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
  );
}

export default App;

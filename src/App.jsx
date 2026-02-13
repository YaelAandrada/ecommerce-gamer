import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";

import About from "./components/About";
import Nosotros from "./page/Nosotros";
import Home from "./page/Home";
import Login from "./pages/Login";
import CategoriaDetalle from "./page/CategoriaDetalles";
import Register from "./pages/Register";
import Administrador from "./page/Administrador";
import FormularioJuegos from "./components/FormularioJuegos";
import Error404 from "./page/Error404";
import UserPanel from "./pages/UserPanel";
import Categorias from "./page/Categorias";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";

import { ToastContainer } from "react-toastify";

function App() {
  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authView, setAuthView] = useState("login");

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsAuthOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <>
      <Navbar
        user={user}
        onLoginClick={() => {
          setAuthView("login");
          setIsAuthOpen(true);
        }}
        onRegisterClick={() => {
          setAuthView("register");
          setIsAuthOpen(true);
        }}
        onLogout={handleLogout}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/categoria/:slug" element={<CategoriaDetalle />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/formulario" element={<FormularioJuegos />} />
        <Route path="*" element={<Error404 />} />
        {/* PANEL ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <Administrador />
            </ProtectedAdminRoute>
          }
        />

        {/* PANEL USUARIO */}
        <Route
          path="/user-panel"
          element={
            <ProtectedRoute>
              <UserPanel />
            </ProtectedRoute>
          }
        />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <AuthModal
        isOpen={isAuthOpen}
        view={authView}
        onClose={() => setIsAuthOpen(false)}
        onLogin={handleLogin}
        onRegister={handleLogin}
      />

      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;

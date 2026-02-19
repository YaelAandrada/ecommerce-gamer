import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

// Páginas públicas
import Home from "./page/Home";
import Categories from "./page/Categorias";
import About from "./page/Nosotros";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Paneles
import UserPanel from "./pages/UserPanel";
import AdminPanel from "./page/Administrador";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        console.error("Error parsing user");
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleLogin = (userData, token) => {
    localStorage.setItem("user", JSON.stringify(userData));
    if (token) localStorage.setItem("token", token);
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />

      <Routes>
        {/* Públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleLogin} />} />

        {/* Panel Usuario */}
        <Route
          path="/panel"
          element={
            <ProtectedRoute user={user}>
              <UserPanel />
            </ProtectedRoute>
          }
        />

        {/* Panel Administrador */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute user={user} requiredRole="admin">
              <AdminPanel />
            </ProtectedRoute>
          }
        />

        {/* Ruta inexistente */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;

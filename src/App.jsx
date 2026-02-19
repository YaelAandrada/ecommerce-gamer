import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Nosotros from "./page/Nosotros";
import Home from "./page/Home";
import Login from "./pages/Login";
import CategoriaDetalle from "./page/CategoriaDetalles";
import Register from "./pages/Register";
import Administrador from "./page/Administrador";
import Error404 from "./page/Error404";
import UserPanel from "./pages/UserPanel";
import Categorias from "./page/Categorias";
import ProtectedRoute from "./components/ProtectedRoute";
import GamesDetalles from "./page/GameDetalles";

import { ToastContainer } from "react-toastify";

function App() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");

      if (storedUser && storedUser !== "undefined") {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
      localStorage.removeItem("user");
    } finally {
      setAuthLoading(false);
    }
  }, []);

  const handleLogin = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token"); // por si después guardás JWT
    setUser(null);
  };

  if (authLoading) return null;

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />

      <Routes>

        {/* Públicas */}
        <Route path="/login" element={<Login setUser={handleLogin} />} />
        <Route path="/register" element={<Register setUser={handleLogin} />} />

        {/* Protegidas */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/categorias" element={<Categorias />} />
                <Route path="/categoria/:slug" element={<CategoriaDetalle />} />
                <Route path="/juego/:id" element={<GamesDetalles />} />
                <Route path="/user-panel" element={<UserPanel />} />

                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute OnlyAdmin>
                      <Administrador />
                    </ProtectedRoute>
                  }
                />

                <Route path="*" element={<Error404 />} />
              </Routes>
            </ProtectedRoute>
          }
        />

      </Routes>

      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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
  localStorage.setItem("user", JSON.stringify(userData));
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
        onLogout={handleLogout}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={
          <ProtectedRoute user={user}>
          <Home />
          </ProtectedRoute>}>
        </Route>

        <Route path="/nosotros" element={
          <ProtectedRoute user={user}>
          <Nosotros />
          </ProtectedRoute>}>
        </Route>

        {/* LOGIN y Register */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />


        <Route path="/categoria/:slug" element={
          <ProtectedRoute user={user}>
          <CategoriaDetalle />
          </ProtectedRoute>} />

        <Route path="/categorias" element={
          <ProtectedRoute user={user}>
          <Categorias />
          </ProtectedRoute>
          } />
        <Route path="*" element={<Error404 />} />


        {/* PANEL ADMIN */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute user={user} OnlyAdmin>
              <Administrador />
            </ProtectedRoute>
          }
        />


        {/* PANEL USUARIO */}
        <Route
          path="/user-panel"
          element={
            <ProtectedRoute user={user}>
              <UserPanel />
            </ProtectedRoute>
          }
        />

        {/* fallback */}
      </Routes>


      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;

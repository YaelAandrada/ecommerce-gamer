import {react, useState, useEffect} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Nosotros from "./page/Nosotros";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Home from "./page/Home";
import Administrador from './page/Administrador';
import FormularioJuegos from "./components/FormularioJuegos";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import AuthModal from "./components/AuthModal";
import Categorias from "./page/Categorias";
import { ToastContainer } from "react-toastify";

function App() {

  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authView, setAuthView] = useState('login');

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsAuthOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  useEffect(() => {
    if (user) {
      setIsAuthOpen(false);
    }
  }, [user]);

  return (
    <>
      <Navbar
        user={user}
        onLoginClick={() => {
          setAuthView('login');
          setIsAuthOpen(true);
        }}
        onRegisterClick={() => {
          setAuthView('register');
          setIsAuthOpen(true);
        }}
        onLogout={handleLogout}
      />


      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route path="/admin" element={<ProtectedAdminRoute>
          <Administrador />
          </ProtectedAdminRoute>} />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/categoria/:slug" element={<Home />} />
        <Route path="/formulario" element={<FormularioJuegos />} />
      </Routes>
      
      <AuthModal
        isOpen={isAuthOpen}
        view={authView}
        onClose={() => setIsAuthOpen(false)}
        onLogin={handleLogin}
        onRegister={(userData) => {
          setUser(userData);
          setIsAuthOpen(false);
        }}
      />

      <Footer />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;

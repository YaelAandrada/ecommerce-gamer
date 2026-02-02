import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Nosotros from "./page/Nosotros";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Register from "./components/RegisterForm";
import Home from "./pages/Home";
import Administrador from './page/Administrador';
import FormularioJuegos from "./components/FormularioJuegos";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import AuthModal from "./components/AuthModal";
import { ToastContainer } from "react-toastify";

function App() {



  return (
    <div className="App relative">
      <Navbar />


      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route path="/admin" element={<Administrador />} />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/categoria/:slug" element={<Home />} />
        <Route path="/formulario" element={<FormularioJuegos />} />
      </Routes>


          <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;

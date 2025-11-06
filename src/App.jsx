import React from "react";
import { Routes, Route } from "react-router-dom";
import Administrador from "./page/Administrador";
import FormularioJuegos from "./components/FormularioJuegos"; // Asegurate que la ruta sea correcta
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <ThemeToggle />
      <Routes>
        {/* Panel principal */}
        <Route path="/administrador" element={<Administrador />} />

        {/* Crear juego */}
        <Route
          path="/administrador/crear"
          element={<FormularioJuegos crearJuego={true} />}
        />

        {/* Editar juego */}
        <Route
          path="/administrador/editar/:id"
          element={<FormularioJuegos crearJuego={false} />}
        />

        {/* otras rutas */}
      </Routes>
    </>
  );
}

export default App;

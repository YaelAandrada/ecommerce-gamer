import React from "react";
import Administrador from "./page/Administrador";
import { Routes, Route } from 'react-router-dom';
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <Routes>
      <Route path="/administrador" element={<Administrador/>} />
      {/* otras rutas */}
    </Routes>


  );
}

export default App;
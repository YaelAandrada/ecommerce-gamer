import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1 className="text-red-600">hola</h1>
            <Link to="/home">Ir a Home</Link>
          </div>
        }
      />
      <Route path="/home" element={<Home />} />
      
    </Routes>
  );
}

export default App;

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
          <>
            <Link to="/home">Home</Link>
          </>
        }
      />
      <Route path="/*" element={<Home />} />
      
    </Routes>
  );
}

export default App;

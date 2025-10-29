import React from 'react'
import { Link } from "react-router-dom";
import "./error404.css"


function Error404() {
  return (
    
    <div className="error-container">
      <h1 className="error-404">Error 404</h1>
      <p className="error-text">Game Over... Esta ruta no existe.</p>
      <Link to="/" className="home-button">
        Volver al inicio
      </Link>
    </div>
    
  )
}

export default Error404

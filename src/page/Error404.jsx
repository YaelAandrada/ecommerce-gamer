import React from 'react'
import { Link } from "react-router-dom";
import "./error404.css"


function Error404() {
 return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f0f0f] text-white text-center bg-cover bg-center"
    style={{
      backgroundImage: "url('/src/img/img-error.jpg')", 
    }}>
      <div className="rgb-anim">
      <h1 className="text-6xl font-bold mb-4text-7xl mb-4 text-[#00ffff] drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">404</h1>
      </div>
      <p className="text-2xl mb-6">
  Game Over... Nivel no encontrado{" "}
 <span className="inline-block animate-jump drop-shadow-[0_0_10px_#00ffcc] jump">
  👾
</span>
</p>
<p className="text-2xl mb-5">Te quedaste sin vidas 🖤🖤🖤</p>

 <a
  href="/"
  className="relative border-2 border-[#00ff9d] text-[#00ff9d] px-6 py-3 rounded-xl font-semibold overflow-hidden group transition-all duration-300"
>
  <span className="relative z-10 group-hover:text-black transition-colors duration-300">
    Reiniciar Partida
  </span>
  <span className="absolute inset-0 bg-[#00ff9d] -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
</a>


    </div>
  );
}

export default Error404

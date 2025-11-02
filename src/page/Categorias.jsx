import React from 'react';
import Carousel from '../components/carrusel';

function Categorias() {
  return (
    <section>
        <div>
            <h2 className="font-bold text-2xl mb-4">Populares</h2>
            {/* Carrucel de juegos */}
            <Carousel />
           
        </div>  

    </section>
  )
}

export default Categorias

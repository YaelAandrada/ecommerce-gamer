import React from 'react';
import Carousel from '../components/carrusel';

function Categorias() {
  return (
    <section className=' text-black dark:text-white bg-gray-100 dark:bg-gray-700 min-h-screen p-8 text-center'>
        <h1 className='font-bold text-4xl m-5 underline'>Categorias de Juegos</h1>
        <div className='dark:bg-gray-900 mb-8 darka:text-white bg-gray-100 dark:shadow-neutral-900 rounded-lg shadow-md shadow-neutral-400'>
            <h2 className="font-bold text-2xl ml-4">Acción</h2>
            {/* Carrucel de juegos */}
            <Carousel categoria="accion" />   
        </div>


        <div className='dark:bg-gray-900 mb-8 darka:text-white bg-gray-100 dark:shadow-neutral-900 rounded-lg shadow-md shadow-neutral-400'>
            <h2 className="font-bold text-2xl ml-4">Battle Royale</h2>
            {/* Carrucel de juegos */}
            <Carousel categoria="battle royale" />   
        </div>  

        <div className='dark:bg-gray-900 mb-8 darka:text-white bg-gray-100 dark:shadow-neutral-900 rounded-lg shadow-md shadow-neutral-400'>
            <h2 className="font-bold text-2xl ml-4">Deportes</h2>
            {/* Carrucel de juegos */}
            <Carousel categoria="deportes" />   
        </div>

        <div className='dark:bg-gray-900 mb-8 darka:text-white bg-gray-100 dark:shadow-neutral-900 rounded-lg shadow-md shadow-neutral-400'>
            <h2 className="font-bold text-2xl ml-4">Aventura</h2>
            {/* Carrucel de juegos */}
            <Carousel categoria="aventura" />   
        </div>

         <div className='dark:bg-gray-900 mb-8 darka:text-white bg-gray-100 dark:shadow-neutral-900 rounded-lg shadow-md shadow-neutral-400'>
            <h2 className="font-bold text-2xl ml-4">Estrategía</h2>
            {/* Carrucel de juegos */}
            <Carousel categoria="estrategia" />   
        </div>


    </section>
  )
}

export default Categorias

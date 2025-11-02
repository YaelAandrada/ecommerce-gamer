import React from 'react';
import Carousel from '../components/carrusel';

function Categorias() {
  return (
    <section className=' text-black dark:text-white bg-gray-100 dark:bg-gray-700 min-h-screen p-8 text-center'>
        <h1 className='font-bold text-4xl m-5 underline'>Categorias de Juegos</h1>
        <div className='dark:bg-gray-900 mb-8 darka:text-white bg-gray-100 dark:shadow-neutral-900 rounded-lg shadow-md shadow-neutral-400'>
            <h2 className="font-bold text-2xl ml-4">Shooter</h2>
            {/* Carrucel de juegos */}
            <Carousel categoria="Shooter" />   
        </div>

        <div className='dark:bg-gray-900 mb-8 darka:text-white bg-gray-100 dark:shadow-neutral-900 rounded-lg shadow-md shadow-neutral-400'>
            <h2 className="font-bold text-2xl ml-4">MOBA</h2>
            {/* Carrucel de juegos */}
            <Carousel categoria="MOBA" />   
        </div>  

        <div className='dark:bg-gray-900 mb-8 darka:text-white bg-gray-100 dark:shadow-neutral-900 rounded-lg shadow-md shadow-neutral-400'>
            <h2 className="font-bold text-2xl ml-4">Battle Royale</h2>
            {/* Carrucel de juegos */}
            <Carousel categoria="battle royale" />   
        </div>  

        <div className='dark:bg-gray-900 mb-8 darka:text-white bg-gray-100 dark:shadow-neutral-900 rounded-lg shadow-md shadow-neutral-400'>
            <h2 className="font-bold text-2xl ml-4">Populares</h2>
            {/* Carrucel de juegos */}
            <Carousel categoria="Shooter" />   
        </div>    

    </section>
  )
}

export default Categorias

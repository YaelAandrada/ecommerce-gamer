import React from 'react'

function Nosotros() {
  return (
    <section className=''>
        <div className='w-full text-center'>
            <h2 className='text-3xl font-bold underline p-5'>¿Quienes somos?</h2>
        </div>
        <div className='max-w-7xl mx-auto bg-gray-100 rounded-lg shadow-md m-10 p-10'>
            <p className='text-lg leading-7'>
            En GamerHub, somos apasionados por los videojuegos y nos dedicamos a ofrecer una experiencia de compra excepcional para todos los entusiastas del gaming. Fundada en 2020, nuestra misión es proporcionar a nuestros clientes una amplia selección de productos de alta calidad, desde consolas y accesorios hasta los últimos lanzamientos de juegos.
            </p>
            <p className='text-lg leading-7 mt-4'>
            Nuestro equipo está compuesto por expertos en la industria del gaming que entienden las necesidades y deseos de nuestra comunidad. Nos esforzamos por mantenernos actualizados con las últimas tendencias y tecnologías para garantizar que nuestros clientes siempre tengan acceso a lo mejor del mercado.
            </p>
            <p className='text-lg leading-7 mt-4'>
            En GamerHub, valoramos la satisfacción del cliente por encima de todo. Nos comprometemos a brindar un servicio al cliente excepcional, con un equipo
            </p>
        </div>
        <div className='w-100 bg-zinc-100 rounded-lg shadow-md p-10'>
            <h3 className='text-2xl font-bold underline p-5 text-center'>Nuestro equipo</h3>
            <ul className='list-disc list-inside text-lg leading-7'>
                <li>Yael Andrada - Fundadora y CEO</li>
            </ul>
        </div>
    </section>
  )
}

export default Nosotros

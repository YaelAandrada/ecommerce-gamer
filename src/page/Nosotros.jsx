import yael from '../assets/integranteNosotros/Yael.jpg'
import analuz from '../assets/integranteNosotros/AnaLuz.jpg'
import gabriel from '../assets/integranteNosotros/Gabriel.jpg'
import nahuel from '../assets/integranteNosotros/Nahuel.jpg'
import lucas from '../assets/integranteNosotros/Lucas.jpg'

function Nosotros() {
  return (
    <section className='w-full h-auto dark:bg-slate-950 pb-10'>
        <div className='w-full text-center'>
            <h2 className='text-3xl dark:text-white font-bold underline p-5'>¿Quienes somos?</h2>
        </div>
        <div className='max-w-7xl mx-auto dark:bg-gray-900 rounded-lg shadow-md m-10 p-10 dark:text-white'>
            <p className='text-lg leading-7'>
            En NeonByte, somos apasionados por los videojuegos y nos dedicamos a ofrecer una experiencia de compra excepcional para todos los entusiastas del gaming. Fundada en 2020, nuestra misión es proporcionar a nuestros clientes una amplia selección de productos de alta calidad, desde consolas y accesorios hasta los últimos lanzamientos de juegos.
            </p>
            <p className='text-lg leading-7 mt-4'>
            Nuestro equipo está compuesto por expertos en la industria del gaming que entienden las necesidades y deseos de nuestra comunidad. Nos esforzamos por mantenernos actualizados con las últimas tendencias y tecnologías para garantizar que nuestros clientes siempre tengan acceso a lo mejor del mercado.
            </p>
            <p className='text-lg leading-7 mt-4'>
            En NeonByte, valoramos la satisfacción del cliente por encima de todo. Nos comprometemos a brindar un servicio al cliente excepcional, con un equipo
            </p>
        </div>
        <div className='max-w-7xl mx-auto dark:bg-gray-900 rounded-lg shadow-md flex justify-center flex-col items-center gap-5 mb-5 dark:text-white'>
            <h3 className='text-2xl font-bold underline p-7 text-center '>Nuestro equipo</h3>
            <div className=''>
                <div className='flex justify-center gap-10 flex-wrap p-7'>
                    <div className='text-lg leading-7 flex flex-col items-center gap-4'>
                        <img src={ yael } alt="" className='h-50 rounded-4xl'/>
                        <span>Yael Andrada</span>
                    </div>

                    <div className='text-lg leading-7 flex flex-col items-center gap-4'>
                        <img src={ analuz } alt="" className='h-50 rounded-4xl'/>
                        <span>Ana Luz Altamiranda</span>
                    </div>

                    <div className='text-lg leading-7 flex flex-col items-center gap-4'>
                        <img src={ gabriel } alt="" className='h-50 rounded-4xl'/>
                        <span>Gabriel Ledezma</span>
                    </div>

                    <div className='text-lg leading-7 flex flex-col items-center gap-4'>
                        <img src={ nahuel } alt="" className='h-50 rounded-4xl'/>
                        <span>Nahuel Quesada</span>
                    </div>

                    <div className='text-lg leading-7 flex flex-col items-center gap-4'>
                        <img src={ lucas } alt="" className='h-50 rounded-4xl'/>
                        <span>Lucas Ruiz</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Nosotros

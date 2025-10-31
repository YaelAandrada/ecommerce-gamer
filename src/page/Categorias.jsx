import React from 'react';
import valorant from '../assets/valorant.jpg';

const juegos = [
  {
    id: 1,
    img: "/freefire.jpg",
    title: "Free Fire",
    subtitle: "",
  },
  {
    id: 2,
    img: valorant,
    title: "Valorant",
    subtitle: "",
  },
  {
    id: 3,
    img: "/img/mobilelegends1.jpg",
    title: "Mobile Legends",
    subtitle: "RECARGA DIRECTA",
  },
  {
    id: 4,
    img: "/img/mobilelegends2.jpg",
    title: "Mobile Legends",
    subtitle: "DOBLE RECARGA",
  },
  {
    id: 5,
    img: "/img/steam.jpg",
    title: "Steam",
    subtitle: "",
  },
  {
    id: 6,
    img: "/img/cs2.jpg",
    title: "Counter Strike 2",
    subtitle: "",
  },
  {
    id: 7,
    img: "/img/lol.jpg",
    title: "League of Legends",
    subtitle: "",
  },
  {
    id: 8,
    img: "/img/marvel.jpg",
    title: "Marvel Rivals",
    subtitle: "",
  },
];

function Categorias() {
  return (
    <section>
        <div>
            <h2 className="font-bold text-2xl mb-4">Populares</h2>
            {/* Carrucel de juegos */}

            <div className="w-full bg-black py-6">
                <div className="flex overflow-x-auto space-x-4 px-6 scrollbar-hide">
                    {juegos.map((juegos) => (
                    <div key={juegos.id} className="relative w-48 md:w-56 lg:w-64 rounded-xl overflow-hidden group">
                        <img
                        src={juegos.img}
                        alt={juegos.title}
                        className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
                        />

                        {juegos.subtitle && (
                        <div className="absolute bottom-0 w-full bg-yellow-400 text-black text-center font-bold py-1 text-sm">
                            {juegos.subtitle}
                        </div>
                        )}
                    </div>
                    ))}
                </div>
            </div>
            
        </div>        

    </section>
  )
}

export default Categorias

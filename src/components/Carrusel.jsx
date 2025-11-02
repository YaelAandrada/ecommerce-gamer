import { useRef } from "react";
import valorant from '../assets/valorant.png';
import freefire from '../assets/freefire.jpg';
import mobilelegends1 from '../assets/mobilelegends.jpg';
import steam from '../assets/steam.jpg';
import lol from '../assets/lol.jpg';
import cs2 from '../assets/cs2.jpeg';
import marvelrivals from '../assets/marvelrivals.jpg';

const juegos = [
  {
    id: 1,
    img: freefire,
    categoria: "Shooter",
    title: "Free Fire",
  },
  {
    id: 2,
    img: valorant,
    categoria: "Shooter",
    title: "Valorant",
  },
  {
    id: 3,
    img: mobilelegends1,
    categoria: "MOBA",
    title: "Mobile Legends",
  },
//   {
//     id: 4,
//     img: "/img/mobilelegends2.jpg",
//     title: "Mobile Legends",
//     subtitle: "DOBLE RECARGA",
//   },
  {
    id: 4,
    img: steam,
    title: "Steam",

  },
  {
    id: 5,
    img: cs2,
    categoria: 'Shooter',
    title: "Counter Strike 2",
  },
  {
    id: 6,
    img: lol,
    categoria: "MOBA",
    title: "League of Legends",
  },
  {
    id: 7,
    img: marvelrivals,
    categoria: "MOBA",
    title: "Marvel Rivals",
  },
    {
    id: 7,
    img: marvelrivals,
    title: "Marvel Rivals",
  },
];

export default function Carousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 300; // pixeles a mover por click
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full flex justify-center bg-black py-6 h-40">
      {/* Botón izquierda */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Contenedor scrollable */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto w-300 space-x-4 px-10 scrollbar-hide scroll-smooth"
      >
        {juegos.map((juego) => (
          <div
            key={juego.id}
            className="relative shrink-0 w-48 md:w-56 lg:w-64 rounded-xl overflow-hidden group"
          >
            <img
              src={juego.img}
              alt={juego.title}
              className="object-cover w-full group-hover:scale-105 transition-transform duration-300"
            />
            {juego.subtitle && (
              <div className="absolute bottom-0 w-full bg-yellow-400 text-black text-center font-bold py-1 text-sm">
                {juego.subtitle}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Botón derecha */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor" 
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
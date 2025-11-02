import {useState, useEffect, useRef } from "react";


export default function Carousel({ categoria }) {
  const [juegos, setJuegos] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ Trae solo los juegos de la categoría elegida
        const res = await fetch(`http://localhost:3001/juegos?categoria=${encodeURIComponent(categoria)}`);
        const data = await res.json();
        setJuegos(data);
      } catch (error) {
        console.error("Error al obtener juegos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [categoria]);

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

  if (loading) return <p className="text-center text-white">Cargando {categoria}...</p>;

  if (juegos.length === 0)
    return <p className="text-center text-gray-400">No hay juegos en la categoría "{categoria}".</p>;

  return (
    <div className="relative w-full flex justify-center py-6 h-40">
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
        className="flex overflow-x-auto space-x-4 px-10 scrollbar-hide scroll-smooth"
      >
        {juegos.map((juego) => (
          <div
            key={juego.id}
            className="relative shrink-0 w-48 md:w-56 lg:w-64 rounded-xl overflow-hidden group"
          >
            <img
              src={juego.img}
              alt={juego.title}
              className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 w-full bg-yellow-400 text-black text-center font-bold py-1 text-sm">
              {juego.title}
            </div>
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
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CardContext";
import { listaJuegosAPI } from "../helpers/queries";

export default function Carousel({ categoria }) {
  const [juegos, setJuegos] = useState([]);
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const { addToCart } = useCart();


  useEffect(() => {
    const obtenerJuegos = async () => {
      const res = await listaJuegosAPI();
      const data = await res.json();

      const filtrados = data.filter(
        (juego) =>
          juego.categoria?.toLowerCase() === categoria?.toLowerCase()
      );

      setJuegos(filtrados);
    };

    obtenerJuegos();
  }, [categoria]);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  if (juegos.length === 0) return null;

  return (
    <div className="relative group px-6">

      {/* Flecha izquierda */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition z-10"
      >
        ◀
      </button>

      {/* Flecha derecha */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition z-10"
      >
        ▶
      </button>

      <div
        ref={scrollRef}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 overflow-x-auto scrollbar-hide py-4"
      >
        {juegos.slice(0, 10).map((juego) => (
          <div
            key={juego.id}
            className="min-w-[170px] bg-gray-900 rounded-xl overflow-hidden relative group hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {/*  */}
            <img
              src={juego.imagen}
              alt={juego.nombre}
              className="w-full h-40 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white text-center p-2">
              <h3 className="font-semibold text-sm mb-2">{juego.nombre}</h3>
              <p className="text-xs mb-2">${juego.precio}</p>
              <button
                onClick={() => addToCart(juego)}
                className="bg-yellow-400 text-black px-3 py-1 rounded text-xs font-semibold hover:bg-yellow-500"
              >
                Agregar
              </button>

            </div>
          </div>
        ))}
      </div>

      {/* Ver más */}
      <div className="flex justify-end mt-4">
        <button
          onClick={() =>
            navigate(`/categoria/${categoria.toLowerCase()}`)
          }
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg transition"
        >
          Ver más →
        </button>
      </div>
    </div>
  );
}

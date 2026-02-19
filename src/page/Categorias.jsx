import { useEffect, useState } from "react";
import { listaJuegosAPI } from "../helpers/queries.js";
import { Link } from "react-router-dom";

export default function Categorias() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    const fetchJuegos = async () => {
      const data = await listaJuegosAPI();
      setJuegos(data);
    };
    fetchJuegos();
  }, []);

  return (
    <div className="min-h-screen px-6 py-10 dark:bg-slate-950">
      <h1 className="text-3xl font-bold text-center text-yellow-400 mb-10">
        Catálogo de Juegos 🎮
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {juegos.map((juego) => (
          <div
            key={juego._id}
            className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md p-4 flex flex-col justify-between hover:scale-105 transition-transform"
          >
            <img
              src={juego.imageUrl}
              alt={juego.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h2 className="text-lg font-bold text-white mb-2">{juego.title}</h2>
            <p className="text-sm text-gray-400 mb-3 line-clamp-3">
              {juego.description}
            </p>
            <p className="text-yellow-400 font-bold mb-3">${juego.price}</p>
            <Link
              to={`/juegos/${juego._id}`}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-md text-center transition"
            >
              Ver más
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
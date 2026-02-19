import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerUnSoloJuegoAPI } from "../helpers/queries.js"; // 
import { useCart } from "../context/CardContext";

export default function GameDetalles() {
  const { id } = useParams();
  const [juego, setJuego] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJuego = async () => {
      try {
        console.log("ID recibido:", id); // debug
        const data = await obtenerUnSoloJuegoAPI(id);
        console.log("Juego recibido:", data); // debug

        if (!data) throw new Error("Juego no encontrado");
        setJuego(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchJuego();
  }, [id]);

  const { addToCart } = useCart();

  if (loading) return <p className="text-center mt-10">Cargando juego...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!juego) return <p className="text-center mt-10">Juego no encontrado</p>;

  return (
    <div className="min-h-screen px-10 py-10 dark:bg-slate-950 pb-10">
      <div className="max-w-6xl text-white mx-auto grid md:grid-cols-2 gap-10 p-8 rounded-xl shadow-lg bg-gray-50 dark:bg-gray-900 dark:shadow-neutral-900 shadow-neutral-400">
        
        {/* Imagen */}
        <img
          src={juego.imageUrl}
          alt={juego.title}
          className="w-full h-[500px] object-cover rounded-xl"
        />

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{juego.title}</h1>
          <p className="text-gray-500 mb-4">{juego.description}</p>

          {/* Requisitos mínimos */}
          {juego.requirements?.[0] && (
            <div className="mb-4">
              <h2 className="font-semibold text-green-400 mb-2">Requisitos mínimos:</h2>
              <ul className="list-disc list-inside text-gray-300">
                {juego.requirements[0]
                  .replace(/["]|mínimos:/gi, "")
                  .split(",")
                  .map((req, index) => (
                    <li key={index}>{req.trim()}</li>
                  ))}
              </ul>
            </div>
          )}

          {/* Requisitos recomendados */}
          {juego.requirements?.[1] && (
            <div className="mb-4">
              <h2 className="font-semibold text-green-400 mb-2">Requisitos recomendados:</h2>
              <ul className="list-disc list-inside text-gray-300">
                {juego.requirements[1]
                  .replace(/["]|recomendados:/gi, "")
                  .split(",")
                  .map((req, index) => (
                    <li key={index}>{req.trim()}</li>
                  ))}
              </ul>
            </div>
          )}

          <p className="text-2xl font-bold text-green-600 mb-6">
            ${juego.price}
          </p>

          <button
            className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-lg font-bold transition"
            onClick={() => addToCart(juego)}
          >
            Agregar al carrito 🛒
          </button>
        </div>
      </div>
    </div>
  );
}
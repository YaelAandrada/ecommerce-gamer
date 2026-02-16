import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerUnSoloJuegoAPI } from "../helpers/queries";
import { useCart } from "../context/CardContext";


export default function GameDetalles() {
  const { id } = useParams();
  const [juego, setJuego] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJuego = async () => {
      try {
        const res = await obtenerUnSoloJuegoAPI(id);
        if (!res || !res.ok) throw new Error("Error al cargar juego");

        const data = await res.json();
        setJuego(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJuego();
  }, [id]);

  const { addToCart } = useCart();

  if (loading) return <p className="text-center mt-10">Cargando juego...</p>;
  if (!juego) return <p className="text-center mt-10">Juego no encontrado</p>;

  return (
    <div className="min-h-screen px-10 py-10 dark:bg-slate-950 pb-10">
      <div className="max-w-6xl text-white mx-auto grid md:grid-cols-2 gap-10 p-8 rounded-xl shadow-lg bg-gray-50 dark:bg-gray-900 dark:shadow-neutral-900 shadow-neutral-400">
        
        {/* Imagen */}
        <img
          src={juego.imagen}
          alt={juego.nombre}
          className="w-full h-[500px] object-cover rounded-xl"
        />

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{juego.nombre}</h1>

          <p className="text-gray-500 mb-4">
            {juego.descripcion}
          </p>

          <div className="mb-4">
            <h2 className="font-semibold">Requisitos mínimos:</h2>
            <p>{juego.requisitosMinimos}</p>
          </div>

          <div className="mb-4">
            <h2 className="font-semibold">Requisitos recomendados:</h2>
            <p>{juego.requisitosOptimos}</p>
          </div>

          <p className="text-2xl font-bold text-green-600 mb-6">
            ${juego.precio}
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

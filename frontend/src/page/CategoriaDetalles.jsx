import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listaJuegosAPI } from "../helpers/queries";

function CategoriaDetalle() {
  const { slug } = useParams();
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    const obtenerJuegos = async () => {
      const res = await listaJuegosAPI();
      const data = await res.json();

      const filtrados = data.filter(
        (juego) =>
          juego.categoria?.toLowerCase() === slug?.toLowerCase()
      );

      setJuegos(filtrados);
    };

    obtenerJuegos();
  }, [slug]);

  return (
    <section className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-10 capitalize">
        {slug}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {juegos.map((juego) => (
          <div
            key={juego.id}
            className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition shadow-lg"
          >
            <img
              src={juego.imagen}
              alt={juego.nombre}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold text-sm mb-1">
                {juego.nombre}
              </h3>
              <p className="text-yellow-400 font-bold">
                ${juego.precio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoriaDetalle;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:3000/api";

function Home() {
  const [juegos, setJuegos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJuegos = async () => {
      try {
        const res = await fetch(`${API_URL}/juegos`);
        if (!res.ok) throw new Error("Error al obtener juegos");

        const data = await res.json();
        setJuegos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJuegos();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen px-4 pb-10">

      {/* HERO */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-3">
          Bienvenido a RollingTech 🎮
        </h1>
        <p className="text-zinc-400">
          Descubrí los mejores juegos y promociones exclusivas
        </p>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="text-center text-green-400 text-lg">
          Cargando juegos...
        </div>
      )}

      {/* ERROR */}
      {error && (
        <div className="text-center text-red-500 text-lg">
          {error}
        </div>
      )}

      {/* JUEGOS */}
      {!loading && !error && (
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-green-400">
            Juegos Destacados
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {juegos.map((juego) => (
              <div
                key={juego._id}
                className="bg-zinc-900 rounded-xl overflow-hidden border border-green-500 hover:scale-105 transition duration-300"
              >
                <img
                  src={juego.imagen}
                  alt={juego.nombre}
                  className="h-48 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {juego.nombre}
                  </h3>

                  <p className="text-sm text-zinc-400 mb-3 line-clamp-2">
                    {juego.descripcion}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-bold">
                      ${juego.precio}
                    </span>

                    <Link
                      to={`/juegos/${juego._id}`}
                      className="bg-green-500 hover:bg-green-400 text-black px-3 py-1 rounded-lg text-sm font-semibold transition"
                    >
                      Ver más
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;

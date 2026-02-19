import React, { useEffect, useState } from "react";
import { listaJuegosAPI } from "../helpers/queries";
import { Link } from "react-router-dom";

function Categorias() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    const fetchJuegos = async () => {
      const data = await listaJuegosAPI();
      if (data) setJuegos(data);
    };
    fetchJuegos();
  }, []);

  // Normaliza categorías (minúsculas y separadas)
  const normalizarCategorias = (categoryString) => {
    if (!categoryString) return [];
    return categoryString
      .toLowerCase()
      .replace(/["]/g, "")
      .split(" ")
      .map((c) => c.trim())
      .filter((c) => c.length > 0);
  };

  // Renderiza una categoría con sus juegos
  const renderCategoria = (categoria) => {
    const filtrados = juegos.filter((juego) =>
      normalizarCategorias(juego.category).includes(categoria.toLowerCase())
    );

    return (
      <div className="dark:bg-gray-900 mb-10 bg-gray-100 rounded-lg shadow-lg p-6">
        <h2 className="font-bold text-3xl mb-6 capitalize text-yellow-400">
          {categoria}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtrados.length > 0 ? (
            filtrados.map((juego) => (
              <div
                key={juego._id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-4 flex flex-col"
              >
                <img
                  src={juego.imageUrl}
                  alt={juego.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  {juego.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
                  {juego.description}
                </p>
                <p className="text-xl font-bold text-green-500 mb-4">
                  ${juego.price}
                </p>
                <Link
                  to={`/juegos/${juego._id}`}
                  className="mt-auto bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg font-bold transition text-center"
                >
                  Ver más
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No hay juegos en esta categoría</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="text-black dark:text-white bg-gray-100 dark:bg-gray-700 min-h-screen p-8">
      <h1 className="font-bold text-4xl mb-10 underline text-center">
        Categorías de Juegos
      </h1>

      {renderCategoria("accion")}
      {renderCategoria("battle")}
      {renderCategoria("deportes")}
      {renderCategoria("aventura")}
      {renderCategoria("estrategia")}
    </section>
  );
}

export default Categorias;
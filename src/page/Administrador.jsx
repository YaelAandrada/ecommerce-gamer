import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiGamepad } from "react-icons/gi"; // Ícono gamer
import { borrarJuegoAPI, listaJuegosAPI } from "../helpers/queries";
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { Edit2, Trash2 } from 'react-feather';
import JuegoAdministrador from "../components/JuegoAdministrador";

const Administrador = () => {
  const [listaJuegos, setListaJuegos] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);
  const [mostrarModal, setMostrarModal] = useState(false);


  const consultarAPI = async () => {
    const respuesta = await listaJuegosAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setListaJuegos(datos);
    } else {
      alert("Ha ocurrido un error, vuelve a intentar esta operación en unos momentos");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 text-gray-900 dark:text-white bg-light dark:bg-gray-080 transition-colors duration-500">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
    <h1 className="text-4xl font-bold text-indigo-500 dark:text-red-600 drop-shadow-neon">
      Juegos disponibles
    </h1>
    <Link
      to="/administrador/crear"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg shadow-md
                 bg-indigo-600 hover:bg-indigo-700 text-white
                 dark:bg-red-600 dark:hover:bg-red-700
                 transition duration-300 transform hover:scale-105 neon-glow"
    >
      <GiGamepad className="text-white text-xl transition-transform duration-300 hover:rotate-12" />
      Agregar Juego
    </Link>
  </div>

  <hr className="border-indigo-300 dark:border-red-500 mb-6" />

  <div className="overflow-x-auto shadow-lg rounded-lg border border-indigo-300 dark:border-red-500">
    <table className="min-w-full text-sm text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
      <thead className="bg-indigo-700 dark:bg-red-700 text-white">
        <tr>
          <th className="px-4 py-2">Cod</th>
          <th className="px-4 py-2">Nombre de Juego</th>
          <th className="px-4 py-2">Precio</th>
          <th className="px-4 py-2">Categoría</th>
          <th className="px-4 py-2">Imagen</th>
          <th className="px-4 py-2">Desarrollador</th>
          <th className="px-4 py-2">Opciones</th>
        </tr>
      </thead>
      <tbody>
        {listaJuegos.map((datosJuego) => (
          <tr
            key={datosJuego.id}
            className="text-center text-sm text-gray-800 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-red-900 transition duration-200"
          >
            <td className="px-4 py-2">{datosJuego.id}</td>
            <td className="px-4 py-2 font-semibold text-red-600 dark:text-red-400">{datosJuego.nombre}</td>
            <td className="px-4 py-2">${datosJuego.precio}</td>
            <td className="px-4 py-2">{datosJuego.categoria}</td>
            <td className="px-4 py-2">
              <img
                src={datosJuego.imagen}
                alt={datosJuego.nombre}
                className="w-20 h-20 object-cover rounded-lg border-2 border-indigo-500 dark:border-red-500 shadow-neon"
              />
            </td>
            <td className="px-4 py-2">{datosJuego.desarrollador}</td>
            <td className="px-4 py-2">
              <div className="flex justify-center gap-3">
                <Link
                  to={`/administrador/editar/${datosJuego.id}`}
                  className="p-2 rounded-md transition duration-300 transform hover:scale-105
                             bg-yellow-500 hover:bg-yellow-600 text-white
                             dark:bg-yellow-400 dark:hover:bg-yellow-500"
                >
                  <Edit2 className="transition-transform duration-300 hover:rotate-12" size={18} />
                </Link>
                <button
                  onClick={() => setMostrarModal(true)}
                  className="p-2 rounded-md transition duration-300 transform hover:scale-105
                             bg-red-600 hover:bg-red-700 text-white
                             dark:bg-red-500 dark:hover:bg-red-600"
                >
                  <Trash2 className="transition-transform duration-300 hover:rotate-12" size={18} />
                </button>

                {mostrarModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm w-full text-center border-2 border-indigo-400 dark:border-fuchsia-500">
                      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                        ¿Seguro que quieres borrar este juego de la lista?
                      </h2>
                      <div className="flex justify-center gap-4">
                        <button
                          onClick={() => setMostrarModal(false)}
                          className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 text-gray-800 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition"
                        >
                          Cancelar
                        </button>
                        <button
                          onClick={() => {
                            borrarJuegoAPI();
                            setMostrarModal(false);
                          }}
                          className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white dark:bg-red-500 dark:hover:bg-red-600 transition"
                        >
                          Borrar
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>


  );
};

export default Administrador;
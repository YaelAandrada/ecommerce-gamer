import { useEffect, useState } from "react";
import { listaJuegosAPI, borrarJuegoAPI } from "../helpers/queries";
import { Edit2, Trash2 } from "react-feather";
import CrearJuegoModal from "./CrearJuegoModal";
import EditarJuegoModal from "./EditarJuegoModal";

const AdminJuegos = () => {
  const [juegos, setJuegos] = useState([]);
  const [mostrarCrear, setMostrarCrear] = useState(false);
  const [mostrarEditar, setMostrarEditar] = useState(false);
  const [juegoEditar, setJuegoEditar] = useState(null);

  useEffect(() => {
    cargarJuegos();
  }, []);

  const cargarJuegos = async () => {
    const res = await listaJuegosAPI();
    const data = await res.json();
    setJuegos(data);
  };

  const abrirEditar = (juego) => {
    setJuegoEditar(juego);
    setMostrarEditar(true);
  };

  const borrarJuego = async (id) => {
    await borrarJuegoAPI(id);
    setJuegos(juegos.filter(j => j.id !== id));
  };

  return (
    <section className="w-full h-auto dark:bg-slate-950 pb-10">
      {/* TÍTULO */}
      <div className="w-full text-center">
        <h2 className="text-3xl font-bold underline p-5 dark:text-white">
          Juegos
        </h2>
      </div>

      {/* CONTENEDOR */}
      <div className="max-w-7xl mx-auto bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md shadow-neutral-400 dark:shadow-neutral-900 p-8 dark:text-white">

        {/* BOTÓN */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setMostrarCrear(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded transition"
          >
            + Agregar juego
          </button>
        </div>

        {/* TABLA */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 dark:border-gray-700">
            <thead className="bg-red-600 text-white">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Nombre</th>
                <th className="p-3">Precio</th>
                <th className="p-3">Categoría</th>
                <th className= "p-3">Imagen</th>
                <th className="p-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {juegos.map(juego => (
                <tr
                  key={juego.id}
                  className="text-center border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  <td className="p-3">{juego.id}</td>
                  <td className="p-3 font-semibold">{juego.nombre}</td>
                  <td className="p-3">${juego.precio}</td>
                  <td className="p-3">{juego.categoria}</td>
                  <td><img src={juego.imagen} alt={juego.nombre} className="w-16 h-16 mx-auto object-cover rounded" /></td>
                  <td className="p-3 flex justify-center gap-2">
                    <button
                      onClick={() => abrirEditar(juego)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded transition"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => borrarJuego(juego.id)}
                      className="bg-red-600 hover:bg-red-700 text-white p-2 rounded transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODALES */}
      {mostrarCrear && (
        <CrearJuegoModal
          onClose={() => setMostrarCrear(false)}
          onCreated={cargarJuegos}
        />
      )}

      {mostrarEditar && juegoEditar && (
        <EditarJuegoModal
          juego={juegoEditar}
          onClose={() => setMostrarEditar(false)}
          onUpdated={cargarJuegos}
        />
      )}
    </section>
  );
};

export default AdminJuegos;

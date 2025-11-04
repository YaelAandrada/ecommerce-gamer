import React from 'react';
import { Link } from 'react-router-dom';
import { borrarJuegoAPI, listarJuegosAPI } from '../../helpers/queries';
import { Edit2, Trash2 } from 'react-feather'; // íconos modernos y personalizables

const JuegoAdministrador = ({ datosJuego, setListaJuegos }) => {
  const borrarJuego = async () => {
    const respuesta = await borrarJuegoAPI(datosJuego.id);
    if (respuesta.status === 200) {
      const respuestaListaJuegos = await listarJuegosAPI();
      if (respuestaListaJuegos.status === 200) {
        const datos = await respuestaListaJuegos.json();
        setListaJuegos(datos);
        alert('🎯 El juego fue eliminado correctamente');
      } else {
        alert('⚠️ Error al actualizar la lista de juegos');
      }
    } else {
      alert('❌ Error al intentar borrar el juego');
    }
  };

  return (
    <tr className="text-center text-sm text-gray-200 hover:bg-gray-800 transition duration-200">
      <td className="px-4 py-2">{datosJuego.id}</td>
      <td className="px-4 py-2 font-semibold text-purple-400">{datosJuego.nombre}</td>
      <td className="px-4 py-2">${datosJuego.precio}</td>
      <td className="px-4 py-2">{datosJuego.categoria}</td>
      <td className="px-4 py-2">
        <img
          src={datosJuego.imagen}
          alt={datosJuego.nombre}
          className="w-20 h-20 object-cover rounded-lg border-2 border-purple-600 shadow-md"
        />
      </td>
      <td className="px-4 py-2">{datosJuego.desarrollador}</td>
      <td className="px-4 py-2">
        <div className="flex justify-center gap-3">
          <Link
            to={`/administrador/editar/${datosJuego.id}`}
            className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-md transition duration-200"
          >
            <Edit2 size={18} />
          </Link>
          <button
            onClick={borrarJuego}
            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md transition duration-200"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default JuegoAdministrador;
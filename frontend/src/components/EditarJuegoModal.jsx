import { useState } from "react";
import { editarJuegoAPI } from "../helpers/queries";

const EditarJuegoModal = ({ juego, onClose, onUpdated }) => {
  const [formData, setFormData] = useState({
    nombre: juego.nombre,
    precio: juego.precio,
    categoria: juego.categoria,
    imagen: juego.imagen,
    desarrollador: juego.desarrollador,
    descripcion: juego.descripcion
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    const res = await editarJuegoAPI(formData, juego.id);
    if (res.ok) {
      onUpdated();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-6 rounded-xl w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Editar juego</h2>
        <label htmlFor="nombre">Nombre:</label>
        <input name="nombre" value={formData.nombre} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 border border-gray-700" />
        <label htmlFor="precio">Precio:</label>
        <input name="precio" value={formData.precio} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 border border-gray-700" />
        <label htmlFor="categoria">Categoría:</label>
        <select
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          >
            <option value="">Seleccionar categoría</option>
            <option value="accion">Acción</option>
            <option value="aventura">Aventura</option>
            <option value="deportes">Deportes</option>
            <option value="estrategia">Estrategia</option>
        </select>
        <label htmlFor="imagen">Imagen:</label>
        <input name="imagen" value={formData.imagen} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 border border-gray-700" />
        <label htmlFor="desarrollador">Desarrollador:</label>
        <input name="desarrollador" value={formData.desarrollador} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 border border-gray-700 mb-4" />
        <label htmlFor="descripcion">Descripción:</label>
        <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 border border-gray-700 mb-4" />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-400 px-4 py-2 rounded">
            Cancelar
          </button>
          <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditarJuegoModal;

import { useState } from "react";
import { crearJuegoAPI } from "../helpers/queries";
import { toast } from "react-toastify";

const CrearJuegoModal = ({ onClose, onCreated }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    requisitosMinimos: "",
    requisitosOptimos: "",
    categoria: "",
    precio: "",
    imagen: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const juegoNuevo = {
      ...formData,
      activo: true
    };

    const res = await crearJuegoAPI(juegoNuevo);

    if (res.ok) {
      toast.success("Juego creado correctamente");
      onCreated();
      onClose();
    } else {
      toast.error("Error al crear el juego");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 text-white p-6 rounded-xl w-full max-w-md shadow-xl"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Crear nuevo juego
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre del juego"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />

          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Descripción"
            rows="3"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />

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

          <textarea
            name="requisitosMinimos"
            value={formData.requisitosMinimos}
            onChange={handleChange}
            placeholder="Requisitos mínimos"
            rows="3"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />

          <textarea
            name="requisitosOptimos"
            value={formData.requisitosOptimos}
            onChange={handleChange}
            placeholder="Requisitos óptimos"
            rows="3"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />

          <input
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            placeholder="Precio"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />

          <input
            name="imagen"
            value={formData.imagen}
            onChange={handleChange}
            placeholder="URL de imagen"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 rounded font-semibold"
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearJuegoModal;

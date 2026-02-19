import { useState } from 'react';
import { editarUsuarioAPI } from '../helpers/queries';
import styleModal from '../styles/Modal.module.css';

export default function ModalEditarUsuario({ usuario, onClose, onUpdated }) {

  const [formData, setFormData] = useState({
    username: usuario?.username || "",
    email: usuario?.email || "",
    role: usuario?.role || "user"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    const res = await editarUsuarioAPI(formData, usuario.id);
    if (res?.ok) {
      onUpdated();
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50  flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl text-white bg-white dark:bg-gray-900 shadow-2xl animate-scaleIn"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-lg font-bold">Editar usuario</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 transition"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-4 space-y-4">

          <div>
            <label className="block text-sm font-medium mb-1">
              Usuario
            </label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Rol
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="user">Usuario</option>
              <option value="admin">Administrador</option>
            </select>
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-sm text-sky-700 bg-gray-200 hover:bg-gray-300 transition"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="rounded-lg px-4 py-2 text-sm bg-red-600 text-white hover:bg-red-700 transition"
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { listarUsuariosAPI } from "../helpers/queries";
import UsuarioRow from "./UsuarioRow";
import ModalEditarUsuario from "./ModalEditarUsuario";

const AdminUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const [usuarioEditar, setUsuarioEditar] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const data = await listarUsuariosAPI();
    setUsuarios(data);
  };

  const usuariosFiltrados = usuarios.filter(u =>
    u.email.toLowerCase().includes(busqueda.toLowerCase()) ||
    u.username.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleEdit = (usuario) => {
    setUsuarioEditar(usuario);
    setMostrarModal(true);
  };

  return (
    <>
      {mostrarModal && (
        <ModalEditarUsuario
          usuario={usuarioEditar}
          onClose={() => setMostrarModal(false)}
          onUpdated={cargarUsuarios}
        />
      )}

      <input
        type="text"
        placeholder="Buscar usuario..."
        className="border px-4 py-2 rounded w-full mb-4"
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead className="bg-red-600 text-white">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Usuario</th>
              <th className="p-2">Email</th>
              <th className="p-2">Rol</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuariosFiltrados.map(usuario => (
              <UsuarioRow
                key={usuario.id}
                usuario={usuario}
                refrescar={cargarUsuarios}
                onEdit={handleEdit}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminUsuarios;

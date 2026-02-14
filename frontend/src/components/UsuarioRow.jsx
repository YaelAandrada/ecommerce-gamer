import { editarUsuarioAPI } from "../helpers/queries";

const UsuarioRow = ({ usuario, refrescar, onEdit }) => {
  return (
    <tr className="border-b text-center">
      <td className="p-2">{usuario.id}</td>
      <td className="p-2">{usuario.username}</td>
      <td className="p-2">{usuario.email}</td>
      <td className="p-2 font-semibold">{usuario.role}</td>
      <td className="p-2">
        <button
          onClick={() => onEdit(usuario)}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Editar
        </button>
      </td>
    </tr>
  );
};

export default UsuarioRow;

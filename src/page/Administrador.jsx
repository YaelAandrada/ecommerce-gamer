import { useState } from "react";
import AdminUsuarios from "../components/AdminUsuarios";

const Administrador = () => {
  const [seccion, setSeccion] = useState("usuarios");

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-red-600">
        Panel de Administración
      </h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSeccion("usuarios")}
          className={`px-4 py-2 rounded ${
            seccion === "usuarios" ? "bg-red-600 text-white" : "bg-gray-200"
          }`}
        >
          Usuarios
        </button>

        <button
          onClick={() => setSeccion("juegos")}
          className="px-4 py-2 rounded bg-gray-200"
        >
          Juegos (después)
        </button>
      </div>

      {seccion === "usuarios" && <AdminUsuarios />}
    </section>
  );
};

export default Administrador;

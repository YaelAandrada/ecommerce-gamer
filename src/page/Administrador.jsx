import { useState } from "react";
import AdminUsuarios from "../components/AdminUsuarios";
import AdminJuegos from "../components/AdminJuegos";

const Administrador = () => {
  const [seccion, setSeccion] = useState("usuarios");

  return (
    <section className=" mx-auto px-4 py-8 w-full h-auto dark:bg-slate-950 pb-10">
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
          className={`px-4 py-2 rounded ${
            seccion === "juegos" ? "bg-red-600 text-white" : "bg-gray-200"
          }`}
        >
          Juegos
        </button>
      </div>

      {seccion === "usuarios" && <AdminUsuarios />}
      {seccion === "juegos" && <AdminJuegos />}
    </section>
  );
};

export default Administrador;

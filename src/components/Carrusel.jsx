import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../components/modal";
import { listaJuegosAPI } from "../helpers/queries";

export default function Categorias() {
  const { slug } = useParams(); // categoría desde la URL
  const [juegos, setJuegos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerJuegos = async () => {
      try {
        setLoading(true);

        const respuesta = await listaJuegosAPI();
        if (!respuesta || !respuesta.ok) {
          throw new Error("No se pudieron obtener los juegos");
        }

        const data = await respuesta.json();

        // 🔍 Filtrar por categoría (slug)
        const juegosFiltrados = data.filter(
          (juego) =>
            juego.categoria?.toLowerCase() === slug.toLowerCase()
        );

        setJuegos(juegosFiltrados);
      } catch (err) {
        console.error(err);
        setError("Error al cargar los juegos");
      } finally {
        setLoading(false);
      }
    };

    obtenerJuegos();
  }, [slug]);

  if (loading) {
    return (
      <p className="text-center text-white mt-10">
        Cargando categoría "{slug}"...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 mt-10">
        {error}
      </p>
    );
  }

  if (juegos.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-10">
        No hay juegos en la categoría "{slug}"
      </p>
    );
  }

  return (
    <section className="px-6 py-8">
      <h1 className="text-2xl font-bold text-yellow-400 mb-6 capitalize">
        Categoría: {slug}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {juegos.map((juego) => (
          <div
            key={juego.id}
            className="cursor-pointer rounded-xl overflow-hidden bg-black hover:scale-105 transition"
            onClick={() => setJuegoSeleccionado(juego)}
          >
            <img
              src={juego.img}
              alt={juego.title}
              className="w-full h-56 object-cover"
            />
            <div className="bg-yellow-400 text-black text-center font-bold py-2">
              {juego.title}
            </div>
          </div>
        ))}
      </div>

      <Modal
        juego={juegoSeleccionado}
        onClose={() => setJuegoSeleccionado(null)}
      />
    </section>
  );
}

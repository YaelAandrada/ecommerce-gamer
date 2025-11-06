import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  crearJuegoAPI,
  editarJuegoAPI,
  obtenerUnSoloJuegoAPI,
} from "../helpers/queries";
import { useNavigate, useParams } from "react-router";

const FormularioJuegos = ({ crearJuego }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    if (!crearJuego) {
      cargarDatosJuego();
    }
  }, [crearJuego]); 

  const cargarDatosJuego = async () => {
    try {
      const respuesta = await obtenerUnSoloJuegoAPI(id);
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        reset(); // Limpiar antes de setear
        setValue("nombre", datos.nombre);
        setValue("precio", datos.precio);
        setValue("categoria", datos.categoria);
        setValue("imagen", datos.imagen);
        setValue("descripcion", datos.descripcion);
        setValue("requisitosMinimos", datos.requisitosMinimos);
        setValue("requisitosRecomendados", datos.requisitosRecomendados);
        setValue("desarrollador", datos.desarrollador);
      } else {
        console.error("Error al obtener juego:", respuesta.status);
      }
    } catch (error) {
      console.error("Error en cargarDatosJuego:", error);
    }
  };

  const onSubmit = async (juego) => {
    try {
      const respuesta = crearJuego
        ? await crearJuegoAPI(juego)
        : await editarJuegoAPI(juego, id);

      if (respuesta.status === 201 || respuesta.status === 200) {
        alert(
          crearJuego
            ? "El juego fue creado correctamente"
            : "El juego fue actualizado"
        );
        navegacion("/administrador");
      } else {
        alert(
          "Ha ocurrido un error, vuelve a intentar esta operación en unos momentos"
        );
      }
    } catch (error) {
      console.error("Error en onSubmit:", error);
      alert("Error inesperado al guardar el juego.");
    }
  };

  return (

    <section className="max-w-4xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        {crearJuego ? "Agregar Juego" : "Editar Juego"}
      </h1>
      <hr className="border-gray-300 dark:border-gray-600 mb-6" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Nombre */}
        <div>
          <label className="block font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Nombre*
          </label>
          <input
            type="text"
            placeholder="Ej: Dark Souls III"
            {...register("nombre", {
              required: "El nombre es un dato obligatorio",
              minLength: { value: 2, message: "Debe ingresar como mínimo 2 caracteres" },
              maxLength: { value: 70, message: "Debe ingresar como máximo 70 caracteres" },
            })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
          />
          {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>}
        </div>

        {/* Precio */}
        <div>
          <label className="block font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Precio (En pesos argentinos)*
          </label>
          <input
            type="number"
            placeholder="Ej: $15000"
            {...register("precio", {
              required: "El precio es un valor obligatorio",
              min: { value: 0, message: "El precio mínimo es de 0 pesos" },
              max: { value: 100000, message: "El precio máximo es de 100000 pesos" },
            })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
          />
          {errors.precio && <p className="text-red-500 text-sm mt-1">{errors.precio.message}</p>}
        </div>

        {/* Categoría */}
        <div>
          <label className="block font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Categoría*
          </label>
          <select
            {...register("categoria", { required: "Debe seleccionar una categoría" })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
          >
            <option value="">Seleccione una opción</option>
            <option value="Sandbox">Sandbox</option>
            <option value="Simulacion">Simulación</option>
            <option value="Fabricacion">Fabricación</option>
            <option value="SoulsLike">SoulsLike</option>
            <option value="Construccion">Construcción</option>
            <option value="Aventura">Aventura</option>
            <option value="Horror">Horror</option>
            <option value="Shooter">Shooter</option>
          </select>
          {errors.categoria && <p className="text-red-500 text-sm mt-1">{errors.categoria.message}</p>}
        </div>

        {/* Imagen */}
        <div>
          <label className="block font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Imagen URL*
          </label>
          <input
            type="text"
            placeholder="Ej: https://ejemplo.com/imagen.jpg"
            {...register("imagen", {
              required: "La URL de la imagen es obligatoria",
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                message: "Debe ingresar una URL de imagen válida (jpg, jpeg, gif, png)",
              },
            })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
          />
          {errors.imagen && <p className="text-red-500 text-sm mt-1">{errors.imagen.message}</p>}
        </div>

        {/* Descripción */}
        <div>
          <label className="block font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Descripción*
          </label>
          <textarea
            placeholder="Ej: Cuando sale la luna, en su corcel aparece el bravo zorro..."
            {...register("descripcion", {
              required: "La descripción es obligatoria",
              minLength: { value: 5, message: "Debe ingresar como mínimo 5 caracteres" },
              maxLength: { value: 1000, message: "Debe ingresar como máximo 1000 caracteres" },
            })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white resize-none h-24"
          />
          {errors.descripcion && <p className="text-red-500 text-sm mt-1">{errors.descripcion.message}</p>}
        </div>

        {/* Requisitos Mínimos y Recomendados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold text-gray-700 dark:text-gray-200 mb-1">
              Requisitos Mínimos*
            </label>
            <textarea
              placeholder="Ej: una lata de sardinas..."
              {...register("requisitosMinimos", {
                required: "Los requisitos mínimos son obligatorios",
                minLength: { value: 5, message: "Debe ingresar como mínimo 5 caracteres" },
                maxLength: { value: 1000, message: "Debe ingresar como máximo 1000 caracteres" },
              })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white resize-none h-36"
            />
            {errors.requisitosMinimos && (
              <p className="text-red-500 text-sm mt-1">{errors.requisitosMinimos.message}</p>
            )}
          </div>

          <div>
            <label className="block font-semibold text-gray-700 dark:text-gray-200 mb-1">
              Requisitos Recomendados*
            </label>
            <textarea
              placeholder="Ej: un buen vaso de fernet..."
              {...register("requisitosRecomendados", {
                required: "Los requisitos recomendados son obligatorios",
                minLength: { value: 5, message: "Debe ingresar como mínimo 5 caracteres" },
                maxLength: { value: 1000, message: "Debe ingresar como máximo 1000 caracteres" },
              })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white resize-none h-36"
            />
            {errors.requisitosRecomendados && (
              <p className="text-red-500 text-sm mt-1">{errors.requisitosRecomendados.message}</p>
            )}
          </div>
        </div>

        {/* Desarrollador */}
        <div>
          <label className="block font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Desarrollador*
          </label>
          <input
            type="text"
            placeholder="Ej: Lionel Messi Studios"
            {...register("desarrollador", {
              required: "El desarrollador es un dato obligatorio",
              minLength: { value: 2, message: "Debe ingresar como mínimo 2 caracteres" },
              maxLength: { value: 70, message: "Debe ingresar como máximo 70 caracteres" },
            })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
          />
          {errors.desarrollador && (
            <p className="text-red-500 text-sm mt-1">{errors.desarrollador.message}</p>
          )}
        </div>

        {/* Botón Guardar */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 transform hover:scale-105 dark:bg-green-400 dark:hover:bg-green-500"
          >
            Guardar
          </button>
        </div>
      </form>
    </section>
  );
};

export default FormularioJuegos;

export default function Modal({ juego, onClose }) {
  if (!juego) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 w-full">
      <div className="bg-white rounded-lg p-6 w-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>
        <div className="flex justify-center items-center">
            <div className="h-48 w-48 shrink-0 m-7">
                <img src={juego.img} alt={juego.title} className="w-full h-48 object-cover rounded" />
            </div>
            <div className="w-80 flex flex-col align-center justify-center gap-4">
                <h2 className="text-xl font-bold underline mt-4 dark:text-black">{juego.title}</h2>
                <p className="mt-2 text-gray-700">{juego.descripcion}</p>
                <p className="mt-2 text-gray-900 font-semibold dark:text-black">Precio: ${juego.precio}</p>
                <button className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 w-32 self-center">Comprar</button>
            </div>
        </div>
      </div>
    </div>
  );
}
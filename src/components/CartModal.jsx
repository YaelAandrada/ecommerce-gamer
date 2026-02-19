import { useCart } from "../context/CardContext";

function CartModal({ isOpen, onClose }) {
  const { cartItems, removeFromCart, clearCart } = useCart();

  if (!isOpen) return null;

  // Calcular total asegurando que price sea número
  const total = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Fondo oscuro */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel lateral */}
      <div className="relative ml-auto w-[350px] h-full bg-gray-900 text-white p-6 shadow-xl transform transition-transform duration-300">
        <h2 className="text-2xl font-bold mb-6">🛒 Tu carrito</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-400">El carrito está vacío</p>
        ) : (
          <>
            <div className="space-y-4 max-h-[60vh] overflow-y-auto">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between bg-gray-800 p-3 rounded"
                >
                  <div>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="text-xs text-gray-400">
                      Cantidad: {item.quantity}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-yellow-400 font-bold">
                      ${Number(item.price) * item.quantity}
                    </p>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-400 text-xs hover:underline"
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-gray-700 pt-4">
              <h3 className="text-lg font-bold">Total: ${total}</h3>

              <button
                onClick={clearCart}
                className="w-full mt-4 bg-red-600 hover:bg-red-700 py-2 rounded"
              >
                Vaciar carrito
              </button>
              <button
                onClick={() => {
                  window.location.href = "/checkout";
                }}
                className="w-full mt-3 bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded font-semibold"
              >
                Comprar 🛍️
              </button>
            </div>
          </>
        )}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✖
        </button>
      </div>
    </div>
  );
}

export default CartModal;
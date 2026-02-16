import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // 🔄 Cargar carrito
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // 💾 Guardar carrito
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ➕ Agregar al carrito
  const addToCart = (juego) => {
    const existe = cartItems.find(item => item.id === juego.id);

    if (existe) {
      setCartItems(cartItems.map(item =>
        item.id === juego.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([
        ...cartItems,
        {
          ...juego,
          quantity: 1
        }
      ]);
    }
  };

  // ➖ Eliminar producto
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // 🧹 Vaciar carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // 💰 Total
  const total = cartItems.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

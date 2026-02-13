import React, { useState, useEffect } from 'react';
import { FaHeart, FaShoppingCart, FaTrash } from 'react-icons/fa';
import { getWishlist, removeFromWishlist } from '../../helpers/userQueriesFront';

const Wishlist = ({ userId }) => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWishlist();
  }, [userId]);

  const fetchWishlist = async () => {
    if (!userId) return;
    
    setLoading(true);
    try {
      const data = await getWishlist(userId);
      setWishlist(data);
    } catch (error) {
      console.error('Error al cargar lista de deseos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (gameId) => {
    try {
      await removeFromWishlist(userId, gameId);
      setWishlist(wishlist.filter(item => item.game._id !== gameId));
    } catch (error) {
      console.error('Error al eliminar de la lista:', error);
    }
  };
   const handleBuy = (gameId) => {
    
    // Navegar a la página de compra
    window.location.href = `/games/${gameId}/buy`;
  };

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
        <FaHeart className="mr-2 text-red-500" /> Mi Lista de Deseos
      </h2>

      {wishlist.length === 0 ? (
        <div className="text-center py-12">
          <FaHeart className="text-gray-400 text-5xl mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Tu lista de deseos está vacía
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Agrega juegos que te interesen haciendo clic en el corazón
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div
              key={item._id}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <img
                src={item.game.image}
                alt={item.game.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-gray-800 dark:text-white mb-2">
                  {item.game.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  {item.game.category}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-indigo-600 dark:text-red-500">
                    ${item.game.price}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleBuy(item.game._id)}
                      className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors"
                      title="Comprar"
                    >
                      <FaShoppingCart />
                    </button>
                    <button
                      onClick={() => handleRemove(item.game._id)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
                      title="Eliminar"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
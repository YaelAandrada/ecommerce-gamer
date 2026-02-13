import React, { useState, useEffect } from 'react';
import { FaStar, FaEdit, FaTrash, FaGamepad } from 'react-icons/fa';
import { getUserReviews, deleteReview } from '../../helpers/userQueriesFront';
const UserReviews = ({ userId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, [userId]);

  const fetchReviews = async () => {
    if (!userId) return;
    
    setLoading(true);
    try {
      const data = await getUserReviews(userId);
      setReviews(data);
    } catch (error) {
      console.error('Error al cargar reseñas:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (reviewId) => {
    if (!window.confirm('¿Estás seguro de eliminar esta reseña?')) return;
    
    try {
      await deleteReview(reviewId);
      setReviews(reviews.filter(review => review._id !== reviewId));
      alert('Reseña eliminada correctamente');
    } catch (error) {
      console.error('Error al eliminar reseña:', error);
      alert('Error al eliminar la reseña');
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={`text-lg ${
          index < rating ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
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
        <FaStar className="mr-2 text-yellow-500" /> Mis Reseñas
      </h2>

      {reviews.length === 0 ? (
        <div className="text-center py-12">
          <FaStar className="text-gray-400 text-5xl mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            No has escrito ninguna reseña aún
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Comparte tu opinión sobre los juegos que has jugado
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src={review.game.image}
                    alt={review.game.name}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white">
                      {review.game.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                      <FaGamepad className="mr-1" /> {review.game.category}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => window.location.href = `/games/${review.game._id}`}
                    className="text-blue-500 hover:text-blue-700"
                    title="Ver juego"
                  >
                    <FaGamepad />
                  </button>
                    <button
                    onClick={() => window.location.href = `/reviews/${review._id}/edit`}
                    className="text-yellow-500 hover:text-yellow-700"
                    title="Editar reseña"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="text-red-500 hover:text-red-700"
                    title="Eliminar reseña"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                <div className="flex mr-4">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(review.createdAt).toLocaleDateString()}
                </span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300">
                {review.comment}
              </p>
              
              {review.response && (
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-1">
                    Respuesta del desarrollador:
                  </p>
                  <p className="text-blue-700 dark:text-blue-200">
                    {review.response}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserReviews;
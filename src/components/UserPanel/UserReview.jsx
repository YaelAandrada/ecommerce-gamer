import React, { useState, useEffect } from 'react';
import { FaStar, FaEdit, FaTrash, FaGamepad } from 'react-icons/fa';
import { getUserReviews, deleteReview } from '../../helpers/userQueries';
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
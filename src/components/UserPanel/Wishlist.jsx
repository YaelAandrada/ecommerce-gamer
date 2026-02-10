import React, { useState, useEffect } from 'react';
import { FaHeart, FaShoppingCart, FaTrash } from 'react-icons/fa';
import { getWishlist, removeFromWishlist } from '../../helpers/userQueries';

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
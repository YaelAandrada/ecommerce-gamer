// src/hooks/useUser.js
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  getWishlistAPI,
  addToWishlistAPI,
  removeFromWishlistAPI,
  getUserStatsAPI,
  updatePerfilAPI
} from '../helpers/queries';

export const useUser = () => {
  const { user, token, isAuthenticated } = useAuth();
  const [wishlist, setWishlist] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState({
    wishlist: false,
    stats: false
  });

  // Cargar wishlist
  const cargarWishlist = async () => {
    if (!isAuthenticated) return;
    
    setLoading(prev => ({ ...prev, wishlist: true }));
    try {
      const respuesta = await getWishlistAPI();
      if (respuesta.ok) {
        const data = await respuesta.json();
        setWishlist(data.items || data.wishlist || []);
      }
    } catch (error) {
      console.error('Error cargando wishlist:', error);
    } finally {
      setLoading(prev => ({ ...prev, wishlist: false }));
    }
  };

  // Cargar estadísticas
  const cargarStats = async () => {
    if (!isAuthenticated) return;
    
    setLoading(prev => ({ ...prev, stats: true }));
    try {
      const respuesta = await getUserStatsAPI();
      if (respuesta.ok) {
        const data = await respuesta.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Error cargando stats:', error);
    } finally {
      setLoading(prev => ({ ...prev, stats: false }));
    }
  };

  // Agregar a wishlist
  const agregarAWishlist = async (juegoId) => {
    try {
      const respuesta = await addToWishlistAPI(juegoId);
      if (respuesta.ok) {
        await cargarWishlist();
        return { success: true };
      }
      return { success: false };
    } catch (error) {
      console.error('Error agregando a wishlist:', error);
      return { success: false };
    }
  };

  // Quitar de wishlist
  const quitarDeWishlist = async (juegoId) => {
    try {
      const respuesta = await removeFromWishlistAPI(juegoId);
      if (respuesta.ok) {
        await cargarWishlist();
        return { success: true };
      }
      return { success: false };
    } catch (error) {
      console.error('Error quitando de wishlist:', error);
      return { success: false };
    }
  };

  // Verificar si un juego está en wishlist
  const estaEnWishlist = (juegoId) => {
    return wishlist.some(item => 
      (item.juego?._id === juegoId) || (item._id === juegoId)
    );
  };

  // Actualizar perfil
  const actualizarPerfil = async (userData) => {
    try {
      const respuesta = await updatePerfilAPI(userData);
      if (respuesta.ok) {
        const data = await respuesta.json();
        return { success: true, data: data.usuario || data.data };
      }
      return { success: false, error: 'Error al actualizar' };
    } catch (error) {
      console.error('Error actualizando perfil:', error);
      return { success: false, error: error.message };
    }
  };

  // Cargar datos al autenticarse
  useEffect(() => {
    if (isAuthenticated) {
      cargarWishlist();
      cargarStats();
    }
  }, [isAuthenticated]);

  return {
    user,
    wishlist,
    stats,
    loading,
    cargarWishlist,
    cargarStats,
    agregarAWishlist,
    quitarDeWishlist,
    estaEnWishlist,
    actualizarPerfil
  };
};

export default useUser;
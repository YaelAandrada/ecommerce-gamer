const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Obtener usuario actual
export const getCurrentUser = async (token) => {
  const response = await fetch(`${API_URL}/users/me`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });


  if (!response.ok) {
    throw new Error('Error al obtener datos del usuario');
  }
  
  return response.json();
};

// Obtener estadísticas del usuario
export const getUserStats = async (userId) => {
  const response = await fetch(`${API_URL}/users/${userId}/stats`);
  return response.json();
};

// Obtener lista de deseos
export const getWishlist = async (userId) => {
  const response = await fetch(`${API_URL}/users/${userId}/wishlist`);
  return response.json();
};

// Agregar a lista de deseos
export const addToWishlist = async (userId, gameId) => {
  const response = await fetch(`${API_URL}/users/${userId}/wishlist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ gameId })
  });
  
  return response.json();
};

// Eliminar de lista de deseos
export const removeFromWishlist = async (userId, gameId) => {
  const response = await fetch(`${API_URL}/users/${userId}/wishlist/${gameId}`, {
    method: 'DELETE'
  });
  
  return response.json();
};

// Actualizar perfil
export const updateUserProfile = async (userId, userData) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  
  if (!response.ok) {
    throw new Error('Error al actualizar perfil');
  }
  
  return response.json();
};
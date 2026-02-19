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

 //Obtener estadísticas del usuario
 
 export const getUserStats = async (userId) => {
   const response = await fetch(`${API_URL}/users/${userId}/stats`);
   return response.json();
 };

 //Obtener lista de deseos
 
 export const getWishlist = async (userId) => {
   const response = await fetch(`${API_URL}/users/${userId}/wishlist`);
   return response.json();
 };

 //Agregar a lista de deseos
  
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
 // Subir imagen de perfil

 export const uploadProfileImage = async (imageFile, userId) => {
   const token = localStorage.getItem('token');
   const formData = new FormData();
   formData.append('avatar', imageFile);
  
   const response = await fetch(`${API_URL}/users/${userId}/upload-avatar`, {
     method: 'POST',
     headers: {
       'Authorization': `Bearer ${token}`
     },
     body: formData
   });
  
   return response.json();
 };

 // Obtener reseñas del usuario

 export const getUserReviews = async (userId) => {
   const response = await fetch(`${API_URL}/users/${userId}/reviews`);
   return response.json();
 };

 // Enviar reseña

 export const submitReview = async (reviewData) => {
   const token = localStorage.getItem('token');
   const response = await fetch(`${API_URL}/reviews`, {
     method: 'POST',
     headers: {
       'Authorization': `Bearer ${token}`,
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(reviewData)
   });
  
   return response.json();
 };

 // Eliminar reseña

 export const deleteReview = async (reviewId) => {
   const token = localStorage.getItem('token');
   const response = await fetch(`${API_URL}/reviews/${reviewId}`, {
     method: 'DELETE',
     headers: {
       'Authorization': `Bearer ${token}`
     }
   });
  
   return response.json();
 };

 // Obtener juegos del usuario

 export const getUserGames = async (userId) => {
   const response = await fetch(`${API_URL}/users/${userId}/games`);
   return response.json();
 };
 
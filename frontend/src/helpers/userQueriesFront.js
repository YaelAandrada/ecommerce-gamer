const API_URL = "http://localhost:3000";

//Usuario Actual
export const getCurrentUser = async (userId) => {
  const res = await fetch(`${API_URL}/usuarios/${userId}`);
  if (!res.ok) throw new Error("Error al obtener usuario");
  return res.json();
};


//Obtener wishlist
export const getWishlist = async (userId) => {
  const res = await fetch(`${API_URL}/usuarios/${userId}`);
  const user = await res.json();
  return user.wishlist || [];
};

//Agregar WishList
export const addToWishlist = async (userId, gameId) => {
  const res = await fetch(`${API_URL}/usuarios/${userId}`);
  const user = await res.json();

  const updatedUser = {
    ...user,
    wishlist: [...(user.wishlist || []), gameId]
  };

  return fetch(`${API_URL}/usuarios/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedUser)
  });
};


//Quitar WishList
export const removeFromWishlist = async (userId, gameId) => {
  const res = await fetch(`${API_URL}/usuarios/${userId}`);
  const user = await res.json();

  const updatedUser = {
    ...user,
    wishlist: user.wishlist.filter(id => id !== gameId)
  };

  return fetch(`${API_URL}/usuarios/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedUser)
  });
};

//Actualizar Perfil
export const updateUserProfile = async (userId, userData) => {
  return fetch(`${API_URL}/usuarios/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  });
};

export const getUserStats = async (userId) => {
  const res = await fetch(`http://localhost:3000/usuarios/${userId}`);
  const user = await res.json();

  return {
    wishlistCount: user.wishlist?.length || 0,
    gamesCount: user.games?.length || 0,
    reviewsCount: user.reviews?.length || 0
  };
};


//Reseña
export const getUserReviews = async (userId) => {
  const res = await fetch(`${API_URL}/reviews?userId=${userId}`);
  return res.json();
};

export const submitReview = async (reviewData) => {
  return fetch(`${API_URL}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reviewData)
  });
};

export const deleteReview = async (reviewId) => {
  return fetch(`${API_URL}/reviews/${reviewId}`, {
    method: "DELETE"
  });
};

//Juegos del Usuario
export const getUserGames = async (userId) => {
  const res = await fetch(`${API_URL}/usuarios/${userId}`);
  const user = await res.json();
  return user.games || [];
};

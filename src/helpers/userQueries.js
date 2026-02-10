const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Obtener usuario actual
export const getCurrentUser = async (token) => {
  const response = await fetch(`${API_URL}/users/me`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  
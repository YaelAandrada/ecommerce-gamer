import { useState, useEffect } from 'react';
import { getCurrentUser } from '../helpers/userQueries';

const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      const userData = await getCurrentUser(token);
      setUser(userData);
    } catch (err) {
      setError(err.message);
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    window.location.href = '/login';
  };

  return {
    user,
    loading,
    error,
    logout,
    refreshUser: fetchUser
  };
};

export default useUser;
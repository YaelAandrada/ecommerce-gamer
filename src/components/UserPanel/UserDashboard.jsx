import React, { useState, useEffect } from 'react';
import { FaUser, FaGamepad, FaHeart, FaStar, FaHistory } from 'react-icons/fa';
import { getUserStats } from '../../helpers/userQueries';

const UserDashboard = ({ userData }) => {
  const [stats, setStats] = useState({
    totalGames: 0,
    wishlistCount: 0,
    reviewsCount: 0,
    avgRating: 0
  });

  useEffect(() => {
    fetchStats();
  }, [userData]);

  const fetchStats = async () => {
    if (userData?._id) {
      const userStats = await getUserStats(userData._id);
      setStats(userStats);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          ¡Bienvenido, {userData?.username || 'Usuario'}!
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Esta es tu área personal donde puedes gestionar tus juegos, lista de deseos y reseñas.
        </p>
      </div>

      {/* Estadísticas rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg shadow">
          <div className="flex items-center">
            <FaUser className="text-blue-500 text-2xl mr-4" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Miembro desde</p>
              <p className="text-xl font-bold text-gray-800 dark:text-white">
                {new Date(userData?.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg shadow">
          <div className="flex items-center">
            <FaGamepad className="text-green-500 text-2xl mr-4" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Juegos adquiridos</p>
              <p className="text-xl font-bold text-gray-800 dark:text-white">
                {stats.totalGames}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-pink-50 dark:bg-pink-900/30 p-6 rounded-lg shadow">
          <div className="flex items-center">
            <FaHeart className="text-pink-500 text-2xl mr-4" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">En lista de deseos</p>
              <p className="text-xl font-bold text-gray-800 dark:text-white">
                {stats.wishlistCount}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg shadow">
          <div className="flex items-center">
            <FaStar className="text-yellow-500 text-2xl mr-4" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Reseñas escritas</p>
              <p className="text-xl font-bold text-gray-800 dark:text-white">
                {stats.reviewsCount}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Actividad reciente */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
          <FaHistory className="mr-2" /> Actividad Reciente
        </h3>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
          <p className="text-gray-600 dark:text-gray-300">
            Aquí se mostrará tu actividad reciente: juegos comprados, reseñas publicadas, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
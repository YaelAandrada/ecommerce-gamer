import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserDashboard from '../components/UserPanel/UserDashboard';
import Wishlist from '../components/UserPanel/Wishlist';
import UserGames from '../components/UserPanel/UserGames';
import UserReviews from '../components/UserPanel/UserReviews';
import EditProfile from '../components/UserPanel/EditProfile';
import { getCurrentUser } from '../helpers/userQueries';

const UserPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
       const user = await getCurrentUser(token);
      setUserData(user);
    } catch (error) {
      console.error('Error al cargar datos del usuario:', error);
      localStorage.removeItem('token');
      navigate('/login');
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <UserDashboard userData={userData} />;
      case 'wishlist':
        return <Wishlist userId={userData?._id} />;
      case 'mygames':
        return <UserGames userId={userData?._id} />;
      case 'reviews':
        return <UserReviews userId={userData?._id} />;
      case 'edit':
        return <EditProfile userData={userData} onUpdate={loadUserData} />;
      default:
        return <UserDashboard userData={userData} />;
    }
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Panel de Usuario
        </h1>
        
        {/* Navegación por pestañas */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 dark:border-gray-700">
          {['dashboard', 'wishlist', 'mygames', 'reviews', 'edit'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-t-lg transition-colors ${
                activeTab === tab
                  ? 'bg-indigo-600 dark:bg-red-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {tab === 'dashboard' && 'Resumen'}
              {tab === 'wishlist' && 'Lista de Deseos'}
              {tab === 'mygames' && 'Mis Juegos'}
              {tab === 'reviews' && 'Mis Reseñas'}
              {tab === 'edit' && 'Editar Perfil'}
            </button>
          ))}
        </div>
        
        {/* Contenido de la pestaña activa */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default UserPanel;

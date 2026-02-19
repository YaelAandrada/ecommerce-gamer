// src/pages/UserPanel.jsx
import React, { useState } from 'react';
import UserDashboard from '../components/UserPanel/UserDashboard';
import UserWishlist from '../components/UserPanel/UserWishlist';
import UserProfile from '../components/UserPanel/UserProfile';

const UserPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const mockUser = {
    username: 'Usuario Prueba',
    email: 'test@test.com'
  };

  const tabs = [
    { id: 'dashboard', nombre: 'Dashboard', icono: '📊' },
    { id: 'perfil', nombre: 'Mi Perfil', icono: '👤' },
    { id: 'wishlist', nombre: 'Lista de Deseos', icono: '❤️' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <UserDashboard />;
      case 'perfil':
        return <UserProfile />;
      case 'wishlist':
        return <UserWishlist />;
      default:
        return <UserDashboard />;
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f3f4f6',
      fontFamily: 'Arial, sans-serif'
    }}>
    
      <div style={{ 
        backgroundColor: 'white', 
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)' 
      }}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '1.5rem 1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{ 
              fontSize: '1.875rem', 
              fontWeight: 'bold', 
              margin: 0,
              color: '#111827'
            }}>
              Panel de Usuario
            </h1>
            <p style={{ 
              color: '#6b7280', 
              margin: '0.25rem 0 0 0' 
            }}>
              Bienvenido, {mockUser.username}
            </p>
          </div>
          <button style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#dc2626',
            color: 'white',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer'
          }}>
            Cerrar Sesión
          </button>
        </div>

    
        <nav style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '0 1rem', 
          display: 'flex', 
          gap: '1rem' 
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.5rem 1rem',
                border: 'none',
                borderBottom: activeTab === tab.id ? '2px solid #4f46e5' : '2px solid transparent',
                color: activeTab === tab.id ? '#4f46e5' : '#6b7280',
                cursor: 'pointer',
                background: 'none',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              <span style={{ marginRight: '0.5rem' }}>{tab.icono}</span>
              {tab.nombre}
            </button>
          ))}
        </nav>
      </div>

    
      <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '2rem 1rem' 
      }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default UserPanel;
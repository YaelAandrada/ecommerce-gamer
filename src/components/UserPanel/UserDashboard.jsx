import React from 'react';

const UserDashboard = () => {
 
  const mockStats = {
    wishlist: 2,
    reviews: 0
  };

  const mockUser = {
    username: 'Usuario Prueba',
    createdAt: new Date().toISOString()
  };

  return (
    <div>
      
      <div style={{ 
        background: 'linear-gradient(to right, #4f46e5, #9333ea)',
        color: 'white',
        padding: '1.5rem',
        borderRadius: '0.5rem',
        marginBottom: '2rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: '600', 
          marginBottom: '0.5rem' 
        }}>
          ¡Hola, {mockUser.username}!
        </h3>
        <p style={{ margin: 0, opacity: 0.9 }}>
          Este es tu panel personal. Aquí puedes gestionar tu perfil y tu lista de deseos.
        </p>
      </div>

      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1.5rem' 
      }}>
        <div style={{ 
          background: 'white', 
          padding: '1.5rem', 
          borderRadius: '0.5rem', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>❤️</div>
          <h4 style={{ 
            fontSize: '0.875rem', 
            color: '#6b7280', 
            margin: '0 0 0.5rem 0' 
          }}>
            Lista de Deseos
          </h4>
          <p style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            color: '#4f46e5', 
            margin: '0 0 0.25rem 0' 
          }}>
            {mockStats.wishlist}
          </p>
          <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: 0 }}>
            juegos guardados
          </p>
        </div>

        <div style={{ 
          background: 'white', 
          padding: '1.5rem', 
          borderRadius: '0.5rem', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⭐</div>
          <h4 style={{ 
            fontSize: '0.875rem', 
            color: '#6b7280', 
            margin: '0 0 0.5rem 0' 
          }}>
            Reseñas
          </h4>
          <p style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            color: '#4f46e5', 
            margin: '0 0 0.25rem 0' 
          }}>
            {mockStats.reviews}
          </p>
          <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: 0 }}>
            reseñas escritas
          </p>
        </div>

        <div style={{ 
          background: 'white', 
          padding: '1.5rem', 
          borderRadius: '0.5rem', 
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📅</div>
          <h4 style={{ 
            fontSize: '0.875rem', 
            color: '#6b7280', 
            margin: '0 0 0.5rem 0' 
          }}>
            Miembro desde
          </h4>
          <p style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            color: '#4f46e5', 
            margin: 0 
          }}>
            Hoy
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

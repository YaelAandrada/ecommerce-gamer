import React from 'react';

const UserWishlist = () => {
  
  const mockWishlist = [
    {
      _id: '1',
      nombre: 'The Legend of Zelda: Breath of the Wild',
      precio: 59.99,
      categoria: 'Aventura',
      imagen: 'https://via.placeholder.com/300x200?text=Zelda'
    },
    {
      _id: '2',
      nombre: 'God of War Ragnarök',
      precio: 69.99,
      categoria: 'Acción',
      imagen: 'https://via.placeholder.com/300x200?text=God+of+War'
    }
  ];

  if (mockWishlist.length === 0) {
    return (
      <div style={{ 
        textAlign: 'center', 
        padding: '3rem', 
        background: 'white', 
        borderRadius: '0.5rem' 
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>❤️</div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
          Tu lista de deseos está vacía
        </h3>
        <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
          Explora nuestro catálogo y agrega juegos que te interesen
        </p>
        <a 
          href="/catalogo" 
          style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            background: '#4f46e5',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '0.375rem'
          }}
        >
          Ver Catálogo
        </a>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: 'bold', 
        marginBottom: '1.5rem' 
      }}>
        Mi Lista de Deseos
      </h2>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '1.5rem' 
      }}>
        {mockWishlist.map((juego) => (
          <div key={juego._id} style={{ 
            background: 'white', 
            borderRadius: '0.5rem', 
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <img 
              src={juego.imagen} 
              alt={juego.nombre} 
              style={{ 
                width: '100%', 
                height: '200px', 
                objectFit: 'cover' 
              }} 
            />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ 
                fontSize: '1.125rem', 
                fontWeight: '600', 
                marginBottom: '0.25rem' 
              }}>
                {juego.nombre}
              </h3>
              <p style={{ 
                color: '#6b7280', 
                marginBottom: '1rem' 
              }}>
                {juego.categoria}
              </p>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center' 
              }}>
                <span style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  color: '#4f46e5' 
                }}>
                  ${juego.precio}
                </span>
                <button style={{ 
                  padding: '0.375rem 0.75rem', 
                  background: '#dc2626', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '0.375rem',
                  cursor: 'pointer'
                }}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserWishlist;

import React from 'react';

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          ⚙️ Panel de Administración
        </h1>
        <p className="text-lg text-gray-600 text-center">
          Aquí los administradores podrán gestionar los juegos.
        </p>
      </div>
    </div>
  );
};

export default Admin;
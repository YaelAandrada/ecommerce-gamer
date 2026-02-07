import { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
export default function AuthModal({ view, onLogin, onRegister, isOpen, onClose }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => setShow(true), 10);
      return () => clearTimeout(timeout);
    } else {
      setShow(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4" onClick={onClose}>
    <div
    onClick={e => e.stopPropagation()}
      className={`bg-[#0f172a] rounded-2xl p-6 w-full max-w-md text-white relative shadow-2xl transform transition-all duration-500 ${
        show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}
    >
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-red-400 text-xl transition"
        aria-label="Cerrar"
      >
        ✕
      </button>

      {/* Título */}
      <h2 className="text-2xl font-bold mb-6 text-center">
        {view === 'login' ? 'Bienvenido de nuevo' : 'Crear cuenta'}
      </h2>

      {/* Contenido */}
      <div className="space-y-4">
        {view === 'login' ? (
          <LoginForm onLogin={onLogin} />
        ) : (
          <RegisterForm onRegister={onRegister} />
        )}
      </div>
    </div>
  </div>
  
);
}


// <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm">
//       <div
//         className={`bg-[#111827] rounded-lg p-6 w-full max-w-md text-white relative shadow-xl transform transition-all duration-300 ${
//           show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
//         }`}
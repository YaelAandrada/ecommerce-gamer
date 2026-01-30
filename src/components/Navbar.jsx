import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LoginModal from './LoginModal.jsx';

const Navbar = ({ onAuthClick }) => {
  // (mantengo todo tu estado y lógica igual)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem('userLoggedIn');
    return saved ? JSON.parse(saved) : false;
  });
  const [isAdmin, setIsAdmin] = useState(() => {
    const saved = localStorage.getItem('userIsAdmin');
    return saved ? JSON.parse(saved) : false;
  });
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('userName') || '';
  });
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ... tus categorías, totales y useEffects (igual que antes)
  const categories = [
    { id: 1, name: 'Sandbox', slug: 'sandbox' },
    { id: 2, name: 'Simulación', slug: 'simulacion' },
    { id: 3, name: 'Aventura', slug: 'aventura' },
    { id: 4, name: 'Estrategia', slug: 'estrategia' },
    { id: 5, name: 'Deportes', slug: 'deportes' },
    { id: 6, name: 'Carreras', slug: 'carreras' },
    { id: 7, name: 'RPG', slug: 'rpg' },
  ];

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    localStorage.setItem('userLoggedIn', JSON.stringify(isLoggedIn));
    localStorage.setItem('userIsAdmin', JSON.stringify(isAdmin));
    localStorage.setItem('userName', userName);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [isLoggedIn, isAdmin, userName, cartItems]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsCartOpen(false);
    setIsCategoriesOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCartOpen(false);
    setIsCategoriesOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsMenuOpen(false);
    setIsCategoriesOpen(false);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
    setIsCartOpen(false);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = productId => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
    setIsCartOpen(false);
  };

  // funciones de login/logout que ya tenías
  const handleLogin = (user) => {
    // user será el objeto enviado desde LoginModal (sin password)
    setIsLoggedIn(true);
    setIsAdmin(Boolean(user?.isAdmin));
    setUserName(user?.name || user?.email || 'Usuario');
  };

  const handleNormalUserLogin = () => {
    setIsLoggedIn(true);
    setIsAdmin(false);
    setUserName('Usuario Normal');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUserName('');
    setIsMenuOpen(false);
    setIsCartOpen(false);
  };

  const isActiveLink = path =>
    location.pathname === path ? 'text-blue-400 font-semibold' : 'hover:text-blue-300';

  return (
    <>
      <nav className="bg-gray-800 text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-500 w-8 h-8 rounded-lg flex items-center justify-center">
              <span className="font-bold">🎮</span>
            </div>
            <Link
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              NeonByte
            </Link>
          </div>

          {/* Links desktop */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className={isActiveLink('/')}>Inicio</Link>
            <div className="relative">
              <Link to="/categorias" className={isActiveLink('/categorias')}>Categorias</Link>
            </div>
            <Link to="/nosotros" className={isActiveLink('/about')}>Nosotros</Link>
            {isAdmin && <Link to="/admin" className={isActiveLink('/admin')}>Admin</Link>}
            {isLoggedIn && <Link to="/wishlist" className={isActiveLink('/wishlist')}>❤️ Favoritos</Link>}
          </div>

          {/* Auth & Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {userName.charAt(0)}
                </div>
                <span>{userName}</span>
                {isAdmin && <span className="text-yellow-400 text-xs">Admin</span>}
                <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
                  🚪 Salir
                </button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={() => onAuthClick('register')}
                  className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
                >
                  Registrarse
                </button>

                {/* BOTÓN CORRECTO para abrir el modal (target debe ser el id del modal) */}
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Abrir Login
                </button>
              </div>
            )}
            <button onClick={toggleCart} className="relative px-2 py-1 hover:bg-gray-700 rounded">
              🛒
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button onClick={toggleMenu} className="md:hidden flex flex-col justify-center items-center w-8 h-8">
            <span className={`bg-white h-1 w-8 rounded transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`bg-white h-1 w-8 rounded my-1 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`bg-white h-1 w-8 rounded transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </button>
        </div>

        {/* Menú mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 px-4">
            <Link to="/" onClick={toggleMenu} className="block py-2 hover:text-blue-400">🏠 Inicio</Link>
            <Link to="/about" onClick={toggleMenu} className="block py-2 hover:text-blue-400">👥 Nosotros</Link>

            {/* Categorías en mobile */}
            <div className="py-2">
              <Link to="/categorias" className={isActiveLink('/categorias')}>Categorias</Link>
            </div>

            {isAdmin && <Link to="/admin" onClick={toggleMenu} className="block py-2 hover:text-blue-400">⚙️ Admin</Link>}
            {isLoggedIn && <Link to="/wishlist" onClick={toggleMenu} className="block py-2 hover:text-blue-400">❤️ Favoritos</Link>}

            <div className="border-t border-gray-700 my-2"></div>

            {isLoggedIn ? (
              <div className="space-y-2">
                <div className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold">
                    {userName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{userName}</p>
                    {isAdmin && <p className="text-xs text-yellow-400">Administrador</p>}
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>🚪</span>
                  <span>Cerrar Sesión</span>
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <button
                  onClick={() => onAuthClick('register')}
                  className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
                >
                  Registrarse
                </button>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                  className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                >
                  Ingresar
                </button>
              </div>
            )}
          </div>
        )}

        {/* Carrito (igual que antes) */}
        {isCartOpen && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleCart}></div>
            <div className="absolute right-4 top-20 w-80 bg-gray-900 rounded-lg shadow-xl z-50 p-4">
              {/* ... contenido del carrito (sin cambios) */}
            </div>
          </>
        )}
      </nav>

      {/* ========================= */}
      {/* IMPORTANT: insertar el modal en el DOM aquí (fuera del nav) */}
      {/* Pasamos handleLogin como prop para que LoginModal notifique al Navbar */}
      <LoginModal onLogin={(user) => handleLogin(user)} />
    </>
  );
};

export default Navbar;

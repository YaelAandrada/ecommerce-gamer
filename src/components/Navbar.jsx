import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useEffect, useState } from 'react';

const Navbar = ({ user, onLoginClick, onRegisterClick, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = !!user;
  const userName = user?.name || user?.username || '';
  const isAdmin = user?.role === 'admin';

  const categories = [
    { id: 1, name: 'Sandbox', slug: 'sandbox' },
    { id: 2, name: 'Simulación', slug: 'simulacion' },
    { id: 3, name: 'Aventura', slug: 'aventura' },
    { id: 4, name: 'Estrategia', slug: 'estrategia' },
    { id: 5, name: 'Deportes', slug: 'deportes' },
    { id: 6, name: 'Carreras', slug: 'carreras' },
    { id: 7, name: 'RPG', slug: 'rpg' },
  ];

  // 🛒 solo carrito desde localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    setCartItems(savedCart ? JSON.parse(savedCart) : []);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsCartOpen(false);
    setIsCategoriesOpen(false);
  }, [location.pathname]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const isActiveLink = path =>
    location.pathname === path
      ? 'text-blue-400 font-semibold'
      : 'hover:text-blue-300';

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-blue-500 w-8 h-8 rounded-lg flex items-center justify-center">
            🎮
          </div>
          <Link to="/" className="text-xl font-bold">
            NeonByte
          </Link>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/home" className={isActiveLink('/')}>Inicio</Link>

          <div className="relative">
            <button onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}>
              Categorías ▼
            </button>
            {isCategoriesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-gray-900 rounded-lg shadow-lg p-2">
                {categories.map(cat => (
                  <Link
                    key={cat.id}
                    to={`/categoria/${cat.slug}`}
                    className="block px-3 py-2 hover:bg-gray-700 rounded"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/nosotros" className={isActiveLink('/nosotros')}>Nosotros</Link>
          {isAdmin && <Link to="/admin">Admin</Link>}
        </div>

        {/* Right section */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />

          {isLoggedIn ? (
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {userName.charAt(0)}
              </div>
              <span>{userName}</span>
              <button
                onClick={onLogout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                🚪 Salir
              </button>
            </div>
          ) : (
            <div className="flex space-x-2">
              <button
                onClick={onRegisterClick}
                className="bg-green-500 px-3 py-1 rounded"
              >
                Registrarse
              </button>
              <button
                onClick={onLoginClick}
                className="bg-blue-600 px-3 py-1 rounded"
              >
                Ingresar
              </button>
            </div>
          )}

          <button className="relative px-2 py-1">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CartModal from "./CartModal";
import { useCart } from "../context/CardContext";


const Navbar = ({ user, onLoginClick, onRegisterClick, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = !!user;
  const userName = user?.name || user?.username || user?.displayName || '';
  const isAdmin = user?.role === 'admin';

  useEffect(() => {
    setIsMenuOpen(false);
    setIsCartOpen(false);
    setIsCategoriesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
  console.log("USER EN NAVBAR:", user);
}, [user]);

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
            <Link to="/categorias" className={isActiveLink('/categorias')}>Categorías</Link>
          </div>

          <Link to="/nosotros" className={isActiveLink('/nosotros')}>Nosotros</Link>
          {isAdmin && <Link to="/admin">Admin</Link>}
        </div>

        {/* Right section */}
        <div className="hidden md:flex items-center space-x-4">

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
            </div>
          )}

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative px-2 py-1"
          >
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
      <div>
      
<Link 
  to="/panel" 
  style={{
    padding: '0.5rem 1rem',
    backgroundColor: '#4f46e5',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '0.375rem',
    marginLeft: '1rem'
  }}
>

</Link>
      </div>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

    </nav>
  );
};

export default Navbar;

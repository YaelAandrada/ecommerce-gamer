import React, {useState, useEffect} from 'react';

import {Link, useLocation} from 'react-router-dom';

import ThemeToggle from './ThemeToggle';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isCategoriesOpen, setIsCategoriesOpen] 
    = useState(false);
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

    const [cartItems, setCartItems] = useState (() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const categories = [
        {id: 1, name:"Sandbox", slug: "sandbox" },
        { id: 2, name: "Simulación", slug: "simulacion" },
        { id: 3, name: "Aventura", slug: "aventura" },
        { id: 4, name: "Estrategia", slug: "estrategia" },
        { id: 5, name: "Deportes", slug: "deportes" },
        { id: 6, name: "Carreras", slug: "carreras" },
        { id: 7, name: "RPG", slug: "rpg" }
    ];

    const totalItems = cartItems.reduce((sum, item) => sum + item.quality, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quality), 0);

    useEffect(() => {
        localStorage.setItem('userLoggedIn', JSON.stringify(isLoggedIn));
        localStorage.setItem('userIsAdmin', JSON.stringify(isAdmin));
        localStorage.setItem('userName', userName);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } , [isLoggedIn, isAdmin, userName, cartItems]);
    
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

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existeItem = prevItems.find(item => item.id === product.id);
            if (existeItem) {
                return prevItems.map(item => 
                    item.id === product.id ? {...item, quantity: item.quantity + 1} 
                    : item
                );
            } else {
                return [...prevItems, { ...product, quantity:1}];
            }
        });
    };
    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };
    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
            return;
        }
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity} : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
        setIsCartOpen(false);
    };

    const isActiveLink = (path) => {
        return location.pathname === path ? 'text-blue-400 font-semibold' : 'hover:text-blue-300';
    };

    const handleLogin= () => {
        setIsLoggedIn(true);
        setIsAdmin(true);
        setUserName('Ana Luz Balamceda');
    };
    


 const handleNormalUserLogin = () => {
    setIsLoggedIn(true);
    setIsAdmin(false);
    setUserName('Ususario Normal');
 };
 const handleLogout= () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
        setUserName ('');
        setIsMenuOpen(false);
        setIsCartOpen(false);
         };
    return (
        <nav className="bg-gray-800 text-white p-4 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-3">
                 <div className="bg-blue-500 w-8 h-8 rounded-lg flex items-center justify-center">
               <span className="font-bold">🎮</span>
              </div>
                    <Link to="/" 
                    className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      NEONBYTS
                      </Link>
                </div>
              <div className="hidden md:flex space-x-8">
                <Link to="/" 
                className={`transition-colors duration-200 ${isActiveLink('/')}`}>
                    Inicio
                    </Link>
                    <div className="relative">
            <button 
              onClick={toggleCategories}
              className={`flex items-center space-x-1 transition-colors duration-200 ${isCategoriesOpen ? 'text-blue-400 font-semibold' : 'hover:text-blue-300'}`}
            >
              <span>Categorías</span>
              <span className={`transform transition-transform duration-200 ${isCategoriesOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>

            {isCategoriesOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl z-50 border border-gray-700">
                <div className="p-2 space-y-1">
                  {categories.map(category => (
                    <Link
                      key={category.id}
                      to={`/categoria/${category.slug}`}
                      className="block px-3 py-2 hover:bg-gray-700 rounded-lg transition-colors duration-200 text-sm"
                      onClick={() => setIsCategoriesOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
                <Link to="/about" 
                className={`transition-colors duration-200 ${isActiveLink('/about')}`}>
                    Nosotros
                    </Link>
                {isAdmin &&(
                <Link to="/admin" 
                className={`transition-colors duration-200 ${isActiveLink('/admin')}`}>
                    Admin
                    </Link>
                )}
                {isLoggedIn &&(
                    <Link to="/whishlist" 
                    className={`transition-colors duration-200 ${isActiveLink('/wishlist')}`}>
                       ❤️ Mis Favoritos
                    </Link>
                )}
            </div>
            
            
            <div className="hidden md:block relative">
                <button
                onClick={toggleCart}
                className="relative p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200"
                aria-label="Carrito de compras">

                    <span className="text-xl">🛒</span>
                    {totalItems > 0 && (
                     <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                        {totalItems}
                     </span>
                    )}

                </button>
                {isCartOpen && (
                    <div className="absolute right-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-xl z-50">
                        <div className="p-4">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold">Carrito de Compras</h3>
                                <button
                                onClick={toggleCart}
                                className="text-gray-400 hover:text-white">
                                    X

                                </button>
                            </div>
                           <div className="max-h-64 overflow-y-auto">
                            {cartItems.length === 0 ? (
                                <p className="text-gray-400 text-center py-4">El carrito esta vacio</p>
                            ) : (
                                cartItems.map(item => (
                                    <div key={item.id} className="flex items-center space-x-3 py-3 border-b border-gray-700">
                                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                                        <div className="flex-1">
                                            <p className="font-medium text-sm">{item.name}</p>
                                            <p className="text-blue-400">${item.price}</p>

                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
                                                -

                                            </button>
                                            <span className="w-8 text-center">{item.quantity}</span>
                                            <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center"
                                            >
                                                +

                                            </button>
                                        </div>
                                        <button 
                                        onClick={() => removerFromCart(item.id)}
                                        className="text-red-400 hover:text-red-300">

                                          🗑️
                                        </button>
                                    </div>
                                ))
                            )}

                           </div>
                           {cartItems.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-gray-700">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="font-semibold">Total</span>
                                    <span className="text-blue-400 font-bold">
                                        ${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex space-x-2">
                                    <button
                                    onClick={clearCart}
                                    className="flex-1 bg-gray-700 hover:bg-gray-600 py-2 rounded transition-colors">
                                        Vaciar

                                    </button>
                                    <button className="flex-1 bg-green-600 hover:bg-green-700 py-2 rounded transition-colors">
                                        Comprar

                                    </button>
                                </div>

                            </div>
                           )}

                        </div>

                    </div>
                )}
            </div>
            
            <button className="md:hidden flex flex-col justify-center items-center w-8 h-8 transition-transform duration-300 hover:scale-110" 
            onClick={toggleMenu}
            aria-lebel="Menu principal">
                <span 
                className={`bg-white h-1 w-8 rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span 
                className={`bg-white h-1 w-8 rounded my-1 duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span 
                className={`bg-white h-1 w-8 rounded transition-all duration-300 ${isMenuOpen ?'-rotate-45 -translate-y-1' : ''} `}></span>
            </button>
            <div className="hidden md:flex items-center space-x-4">
                <ThemeToggle />
                {isLoggedIn ? (
            <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 bg-gray-800 px-3 py-2 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                    {userName.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                     <span className="text-sm font-medium">{userName}</span>
                   
                {isAdmin && (
                    <span className="text-xs text-yellow-400">
                    Administrador
                    </span>
                )}
                 </div>
                 </div>
                
             
                <button
                onClick={handeleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                    
                    <span>🚪</span>
                    <span>Salir</span>
                
             </button>

            </div>
            ) : (
                <div className="flex space-x-3">
                    <Link to="/register" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors duration-200">
                    Registrarse
                    </Link>
                <div className="relative group">
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                        <span>🔑</span>
                        <span>Ingresar</span>
                        <span>▼</span>

                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <button 
                        onClick={handleNormalUserLogin}
                        className="w-full text-left px-4 py-3 hover:bg-gray-700 rounded-t-lg flex items-center space-x-2">
                           
                            <span>👤</span>
                            <span>Usuario Normal</span>

                        </button>
                        <button
          onClick={() => {
       setIsMenuOpen(false);
           }}
        
>
            <div>
           
            </div>
                 </button>
                       <button
                       onClick={handleLogin}
                       className="w-full text-left px-4 py-3 hover:bg-gray-700 rounded-b-lg flex items-center space-x-2">
                       
                        <span>Administrador</span>

                       </button>
                    </div>
                </div>
                </div>
               )}
          </div>
        </div>
        <div className={`md:hidden absolute left-0 right-0 bg-gray-800 transition-all duration-300  shadow-2xl ${isMenuOpen ? 'top-16 opacity-100' : 'top-[-100%] opacity-0'}`}>
        
            <div className="flex flex-col space-y-1 p-4 max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between py-3 px-4 bg-gray-800 rounded-lg mb-2">
                    <div className="flex items-center space-x-3">
                        <span className="text-xl">🛒</span>
                        <span>Carrito</span>

                    </div>
                    <div className="flex items-center space-x-2">
                        {totalItems > 0 &&(
                            <span className="g-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                                {totalItems}
                            </span>
                        )}
                        <span className="text-blue-400 font-bold">${totalPrice.toFixed(2)}</span>

                    </div>
                </div>

                <Link to="/" 
                className={`py-3 px-4 rounded-lg transition-colors ${isActiveLink('/')} ${location.pathname === '/' ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                onClick={() => setIsMenuOpen(false)}>
                   🏠 Inicio
             </Link>
                <Link to="/about" 
                className={`py-3 px-4 rounded-lg transition-colors ${isActiveLink('/about')} ${location.pathname === '/about' ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                onClick={() => setIsMenuOpen(false)}>
                  👥 Nosotros
                    </Link>
               {isAdmin && (
                <Link to="/admin" 
                className={`py-3 px-4 rounded-lg transition-colors ${isActiveLink('/admin')} ${location.pathname === '/admin' ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                onClick={() => setIsMenuOpen(false)}>
                   ⚙️ Admin
                    </Link>)}
               {isLoggedIn && (
                 <Link to="/wishlist" 
                 className={`py-3 px-4 rounded-lg transition-colors ${isActiveLink('/wishlist')} ${location.pathname === '/wishlist' ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                  onClick={() => setIsMenuOpen(false)}>
                   ❤️ Mis Favoritos
                </Link>
               )}

               <div className="border-t border-gray-700 my-2"></div>
               
               {isLoggedIn ? (
                <div className="flex flex-col space-y-2">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
                         {userName.charAt(0)}
                    </div>
                    <div>
                    <p className="font-medium">{userName}</p>
                    {isAdmin && (
                        <p className="text-xs text-yellow-400">
                            Administrador</p>
                    )}
                    </div>
                    </div>
                    </div>
                    <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 px-4 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                      <span>🚪</span>
                      <span>Cerrar Sesión</span>
                   </button>
                </div>
               ):(
                
                <div className="flex flex-col space-y-2">
                    <Link to="/register"
                    className="bg-green-600 hover:bg-green-700 px-4 py-3 rounded-lg transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}>
                        Registrarse
                    </Link>
            
                    <button 
                    onClick={handleNormalUserLogin}
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                        <span>👤</span>
                        <span>Ingresar como Usuario</span>
                  </button>
                    <button 
                    onClick={handleLogin}
                    className="bg-purple-600 hover:bg-purple-700 px-4 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                       <span>Ingresar como Admin</span>
                       
                  </button>
                  </div>
              )}
           </div>
         </div>
         {isCartOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsCartOpen(false)}></div>
         )}
     </nav>
    );
};


export default Navbar;
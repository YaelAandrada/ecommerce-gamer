import React from 'react';

import React, {useState, useEffect} from 'react';

import {Link, useLocation} from 'react-router-dom';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    useEffect(() => {
        localStorage.setItem('userLoggedIn', JSON.stringify(isLoggedIn));
        localStorage.setItem('userInAdmin', JSON.stringify(isAdmin));
        localStorage.setItem('userName', userName);
    } , [isLoggedIn, isAdmin, userName]);
    
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);
    

    const toggleMenu = () => {setIsMenuOpen(!isMenuOpen);};

    const isActiveLink = (path) => {
        return location.pathname === path ? 'text-blue-400 font-semibold' : 'hover:text-blue-300';
    };

    const handleLogin= () => {
        setIsLoggedIn(true);
        setIsAdmin(true);
        setUserName('Ana Luz Balamceda');
    };
    const handleLogout= () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
        setUserName ('')
        setIsMenuOpen(false);
   
    localStorage.clear();
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('userIsAdmin');
    localStorage.removeItem('userName');
 };
 const handleNormalUserLogin = () => {
    setIsLoggedIn(true);
    setIsAdmin(false);
    setUserName('Ususario Normal');
 };
    return (
        <nav className= "bg-gray-800 text-white p-4 shadow-lg sticky top-0 z-50">
            <div className= "container mx-auto flex justify-between items-center">
               <span className="font-bold">emoji</span>
                <div className="felx items-center">
                    <Link to="/" 
                    className= "text-xl font-bold">
                      NEONBYTS
                      </Link>
                </div>
              <div className="hidden md: flex sapce-x-8">
                <Link to="/" 
                clasName={`transition-colors duration-200 ${isActiveLink('/')}`}>
                    Inicio
                    </Link>
                <Link to="/about" 
                clasName={`transition-colors duration-200 ${isActiveLink('/about')}`}>
                    Nosotros
                    </Link>
                {isAdmin &&(
                <Link to="/admin" 
                clasName={`transition-colors duration-200 ${isActiveLink('/admin')}`}>
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
            <button className="md:hidden flex flex-col justify-center items-center w-8 h-8 transition-transform duration-300 hover:scale-110" 
            onClick={toggleMenu}
            aria-lebel="Menu pricipal">
                <span 
                className={`bg-white h-1 w-8 rounded transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span 
                className={`bg-white h-1 w-8 rounded my-1 duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span 
                className={`bg-white h-1 w-8 rounded transition-all duration-300 ${isMenuOpen ?'-rotate-45 -translate-y-1' : ''} `}></span>
            </button>
            <div className="hidden md:flex items-center space-x-4">
                {isLoggedIn ? (
            <div className="felx items-center space-x-4">
            <div className="flex items-center space-x-3 bg-gray-800 px-3 py-2 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                    {userName.chatAt(0)}
                    </div>
                    <div className="flex flex-col">
                     <span className="text-sm font-mediun">{userName}</span>
                   
                {isAdmin && (
                    <span className="text-xs text-yellow-400">
                    Administrador
                    </span>
                )}
                 </div>
                 </div>
                
             
                <button
                onClick={handeleLogout}
                clasName="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                    
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
                       onClick={handleLogin}
                       className="w-full text-left px-4 py-3 hover:bg-gray-700 rounded-b-lg flex items-center space-x-2">
                       
                        <span>Administrador</span>

                       </button>
                    </div>
                </div>
                </div>
               )};
          </div>
        </div>
        <div className={`md:hidden absolute left-0 right-0 bg-gray-800 transition-all duration-300  shadow-2xl ${isMenuOpen ? 'top-16 opacity-100' : 'top-^[-100%] opacity-0'}`}>
            <div className="flex flex-col space-y-1 p-4 max-h-[80vh] overflow-y-auto">
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
                 <Link to="/whishlist" 
                 className={`py-3 px-4 rounded-lg transition-colors ${isActiveLink('/wishlist')} ${location.pathname === '/wishlist' ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
                  onClick={() => setIsMenuOpen(false)}>
                   ❤️ Mis Favoritos
                </Link>
               )};

               <div className="border-t border-gray-700 my-2"></div>
               
               {isLoggedIn ? (
                <div className="flex flex-col space-y-2">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold">
                         {userName. chatAt(0)}
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
                    onClick={jhandlelogout}
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
     </nav>
    );
};


export default Navbar;
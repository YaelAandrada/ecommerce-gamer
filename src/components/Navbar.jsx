import React from 'react';

import React, {useState} from 'react';

import {Link} from 'react-router-dom';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const toggleMenu = () => {setIsMenuOpen(!isMenuOpen);};

    const handleLogin= () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
        setIsMenuOpen(false);
    }
    return (
        <nav className= "bg-gray-800 text-white p-4">
            <div className= "container mx-auto flex justify-between items-center">
               
                <div className="felx items-center">
                    <Link to="/" className= "text-xl font-bold">NEONBYTS</Link>
                </div>
              <div className="hidden md: flex sapce-x-6">
                <Link to="/" clasName="hover:text-blue-300">Inicio</Link>
                <Link to="/about" clasName="hover:text-blue-300">Nosotros</Link>
                {isAdmin &&(
                <Link to="/admin" clasName="hover:text-blue-300">Admin</Link>
                )}
                {isLoggedIn &&(
                    <Link to="/whishlist" className="hover:text-blue-300">
                        Mis Favoritos
                    </Link>
                )}
            </div>
            <button className="md:hidden flex flex-col justify-center items-center w-8 h-8" onClick={toggleMenu}>
                <span className={`bg-white h-1 w-8 rounded transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`bg-white h-1 w-8 rounded my-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`bg-white h-1 w-8 rounded transition-all ${isMenuOpen ?'-rotate-45 -translate-y-1' : ''} `}></span>
            </button>
            <div className="hidden md:flex items-center space-x-4">
                {isLoggedIn ? (
            
            <div className="flex items-center space-x-4">
                <span className="text-sm">¡Hola, Usuario!</span>
                <button
                onClick={handeleLogout}
                clasName="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                Logout 
             </button>

            </div>
            ) : (
                <div className="flex space-x-2">
                    <Link to="/register" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded">
                    Registrarse
                    </Link>
                    <button
                    onClick={handleLogin} className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                        Login

                    </button>
                </div>
               )};
          </div>
        </div>
        <div className={`md:hidden absolute left-0 right-0 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'top-16 opacity-100' : 'top-^[-100%] opacity-0'}`}>
            <div className="flex flex-col space-y-4 p-4">
                <Link to="/" className="hove:text-blue-300 py-2"onClick={() => setIsMenuOpen(false)}>Inicio</Link>
                <Link to="/about" className="hove:text-blue-300 py-2"onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
               {isAdmin && (
                <Link to="/admin" className="hove:text-blue-300 py-2"onClick={() => setIsMenuOpen(false)}>
                    Admin
                    </Link>)}
               {isLoggedIn && (
                 <Link to="/whishlist" className="hove:text-blue-300 py-2" onClick={() => setIsMenuOpen(false)}>
                    Mis Favoritos
                </Link>
               )}
               {isLoggedIn ? (
                <div className="flex flex-col space-y-2">
                    <span className="text-sm py-2 boder-t border-gray-600 pt-4"></span>
                </div>
               )}


                
            </div>
         </div>
     </nav>
    );
};


export default Navbar;
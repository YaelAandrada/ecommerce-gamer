import React from 'react';

const Navbar = () => {
    return (
        <nav className= "bg-gray-800 text-white p-4">
            <div className= "container mx-auto flex justify-between items-center">
                //logo y nombre de la pagina
                <div className="felx items-center">
                    <h1 className= "text-xl font-bold">Nombre de la pagina</h1>
                </div>
              <div className="hidden md: flex sapce-x-6">
                <a href="/" clasName="hover:text-blue-300">Inicio</a>
                <a href="/about" clasName="hover:text-blue-300">Nosotros</a>
                <a href="/admin" clasName="hover:text-blue-300">Admin</a>
            </div>
            <div className="flex items-center space-x-4">
             <button clasName="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                Login
             </button>
            </div>
        </div>

        </nav>
    );
};
export default Navbar;
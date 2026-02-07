import React from 'react';
import { Navigate } from 'react-router';

const ProtectorRutas = ({children}) => {
    const userAdmin = JSON.parse(sessionStorage.getItem('userKey')) || false
    // aqui se obtiene la key del usuario admin para verificar si este esta logueado, si no lo esta retorna a la pagina de login, caso contrario si deja acceder a las rutas del administrador.
    if (!userAdmin)
    {
        return <Navigate to={'/login'}></Navigate>
    }
    else
    {
        return children
    }
};

export default ProtectorRutas;
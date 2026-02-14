import React from 'react';
import { Route, Routes } from 'react-router';
import Administrador from '../pages/Administrador';
import FormularioJuegos from '../pages/FormularioJuegos';

const RutasAdmin = () => {
    return (
        <Routes>
            <Route path='/' element={<Administrador></Administrador>}></Route>
            <Route exact path='/crear' element={<FormularioJuegos crearJuego={true}></FormularioJuegos>}></Route>
            <Route exact path='/editar/:id' element={<FormularioJuegos crearJuego={false}></FormularioJuegos>}></Route>
        </Routes>
    );
};

export default RutasAdmin;
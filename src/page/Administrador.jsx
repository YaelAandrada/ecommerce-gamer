import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FileEarmarkPlus } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { listarJuegosAPI } from "../helpers/queries";
import JuegoAdministrador from "./juego/JuegoAdministrador";

const Administrador = () => {
  const [listaJuegos, setListaJuegos] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    const respuesta = await listarJuegosAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setListaJuegos(datos);
    } else {
      alert(
        "Ha ocurrido un error, vuelve a intentar esta operación en unos momentos"
      );
    }
  };

  return (
    <section className="container mainSection py-4">
      <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
        <h1 className="display-4 font-weight-bold text-primary">Juegos disponibles</h1>
        <Link className="btn btn-primary btn-lg shadow-sm" to={"/administrador/crear"}>
          <FileEarmarkPlus className="mr-2" />
          Agregar Juego
        </Link>
      </div>
      <hr className="my-4" />
      <div className="table-responsive">
        <Table striped bordered hover className="shadow-sm">
          <thead className="thead-dark">
            <tr className="text-center">
              <th>Cod</th>
              <th>Nombre de Juego</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th>Imagen</th>
              <th>Desarrollador</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {listaJuegos.map((datosJuego) => (
              <JuegoAdministrador
                key={datosJuego.id}
                datosJuego={datosJuego}
                setListaJuegos={setListaJuegos}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default Administrador;

// ================= CONFIG =================

// Backend real
const API_URL = "http://localhost:3000/api";

// ================== JUEGOS CRUD ==================

// CREAR JUEGO
export const crearJuegoAPI = async (juegoNuevo) => {
  try {
    return await fetch(`${API_URL}/juegos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(juegoNuevo),
    });
  } catch (error) {
    console.error("Error crearJuegoAPI:", error);
    return false;
  }
};

// LISTAR JUEGOS
export const listaJuegosAPI = async () => {
  try {
    return await fetch(`${API_URL}/juegos`);
  } catch (error) {
    console.error("Error listaJuegosAPI:", error);
    return false;
  }
};

// OBTENER 1 JUEGO
export const obtenerUnSoloJuegoAPI = async (id) => {
  try {
    return await fetch(`${API_URL}/juegos/${id}`);
  } catch (error) {
    console.error("Error obtenerUnSoloJuegoAPI:", error);
    return false;
  }
};

// EDITAR JUEGO
export const editarJuegoAPI = async (id, juegoAEditar) => {
  try {
    return await fetch(`${API_URL}/juegos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(juegoAEditar),
    });
  } catch (error) {
    console.error("Error editarJuegoAPI:", error);
    return false;
  }
};

// BORRAR JUEGO
export const borrarJuegoAPI = async (id) => {
  try {
    return await fetch(`${API_URL}/juegos/${id}`, {
      method: "DELETE",
      // headers: { Authorization: `Bearer ${token}` }
    });
  } catch (error) {
    console.error("Error borrarJuegoAPI:", error);
    return false;
  }
};

// ================== USUARIOS ==================

// REGISTER
export const registerAPI = async (newUser) => {
  try {
    return await fetch(`${API_URL}/usuarios/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
  } catch (error) {
    console.error("Error registerAPI:", error);
    return false;
  }
};

// LOGIN (BACKEND REAL)
export const loginAPI = async (loginData) => {
  try {
    const res = await fetch(`${API_URL}/usuarios/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });

    return await res.json(); // { token, user }
  } catch (error) {
    console.error("Error loginAPI:", error);
    return null;
  }
};

// LISTAR USUARIOS
export const listarUsuariosAPI = async () => {
  try {
    const res = await fetch(`${API_URL}/usuarios`);
    return await res.json();
  } catch (error) {
    console.error("Error listarUsuariosAPI:", error);
    return [];
  }
};

// EDITAR USUARIO
export const editarUsuarioAPI = async (usuario, id) => {
  try {
    return await fetch(`${API_URL}/usuarios/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });
  } catch (error) {
    console.error("Error editarUsuarioAPI:", error);
    return false;
  }
};

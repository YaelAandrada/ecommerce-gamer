const API_URL = "http://localhost:5000/api";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

// Crear juego
export const crearJuegoAPI = async (juegoNuevo) => {
  try {
    const res = await fetch(`${API_URL}/juegos`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(juegoNuevo),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Listar juegos
export const listaJuegosAPI = async () => {
  try {
    const res = await fetch(`${API_URL}/juegos`);
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Borrar juego
export const borrarJuegoAPI = async (id) => {
  try {
    const res = await fetch(`${API_URL}/juegos/${id}`, {
      method: "DELETE",
      headers: getAuthHeaders(),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Obtener un solo juego
export const obtenerUnSoloJuegoAPI = async (id) => {
  try {
    const res = await fetch(`${API_URL}/juegos/${id}`);
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Editar juego
export const editarJuegoAPI = async (juegoAEditar, id) => {
  try {
    const res = await fetch(`${API_URL}/juegos/${id}`, {
      method: "PUT",
      headers: getAuthHeaders(),
      body: JSON.stringify(juegoAEditar),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// REGISTER
export const registerAPI = async (newUser) => {
  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    const data = await res.json();
    if (!res.ok) return { error: data.msg || "Error al registrar" };
    return data;
  } catch (error) {
    console.error(error);
    return { error: "Error de conexión" };
  }
};

// LOGIN
export const loginAPI = async (emailOrUsername, password) => {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emailOrUsername, password }),
    });
    const data = await res.json();
    if (!res.ok) return null;
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// USUARIOS
export const listarUsuariosAPI = async () => {
  try {
    const res = await fetch(`${API_URL}/usuarios`);
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const editarUsuarioAPI = async (usuario, id) => {
  try {
    const res = await fetch(`${API_URL}/usuarios/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
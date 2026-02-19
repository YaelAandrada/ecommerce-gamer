// api.js
const API_URL = "http://localhost:3000/api";

// ================== JUEGOS ==================

// Obtener todos los juegos
export const getJuegos = async () => {
  try {
    const res = await fetch(`${API_URL}/juegos`);
    if (!res.ok) throw new Error("Error al obtener juegos");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Obtener un solo juego por ID
export const getJuegoById = async (id) => {
  try {
    const res = await fetch(`${API_URL}/juegos/${id}`);
    if (!res.ok) throw new Error("Juego no encontrado");
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Crear juego
export const crearJuego = async (juegoNuevo) => {
  try {
    const res = await fetch(`${API_URL}/juegos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(juegoNuevo),
    });
    if (!res.ok) throw new Error("Error al crear juego");
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Editar juego
export const editarJuego = async (juegoAEditar, id) => {
  try {
    const res = await fetch(`${API_URL}/juegos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(juegoAEditar),
    });
    if (!res.ok) throw new Error("Error al editar juego");
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Borrar juego
export const borrarJuego = async (id) => {
  try {
    const res = await fetch(`${API_URL}/juegos/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error("Error al borrar juego");
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// ================== AUTH ==================

// Registro de usuario
export const registerUser = async (newUser) => {
  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.msg || "Error al registrar");
    return data;
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

// Login de usuario
export const loginUser = async (data) => {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (!res.ok) throw new Error(result.msg || "Error en login");

    // Guardar token si viene en la respuesta
    if (result.token) {
      localStorage.setItem("token", result.token);
    }

    return result;
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};
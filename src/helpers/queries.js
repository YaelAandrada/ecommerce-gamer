// POST - crear producto - 201
// GET - obtener 1 o mas productos - 200
// DELETE - borrar 1 producto - 200
// PUT/PATCH - editar 1 producto

// ⚠️ FUTURO BACKEND
// Esta URL debe venir de una variable de entorno:
// import.meta.env.VITE_API_URL (Vite)
// process.env.REACT_APP_API_URL (CRA)
//
// Ejemplo backend:
// const API_URL = "https://api.miproyecto.com/api";

const API_URL = "http://localhost:3000";

//Aqui esta trabajando con una api de JSON, aqui tendrán que modificar una linea para usarlo para backend

export const crearJuegoAPI = async (juegoNuevo) => {
  try {
    return await fetch(`${API_URL}/juegos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        // 🔐 FUTURO BACKEND
        // Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(juegoNuevo),
    });
  } catch (error) {
    console.error(error);
    return false;
  }
};

// 🔐 FUTURO BACKEND
// El token JWT se obtiene en el login y se guarda en:
// localStorage / sessionStorage / cookie httpOnly

export const listaJuegosAPI = async() =>{
    try
    {
        const respuesta = await fetch(`${API_URL}/juegos`)
        return respuesta
    }
    catch (error)
    {
        console.error(error)
        return false
    }
}

export const borrarJuegoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${API_URL}/juegos/${id}`, {
      method: "DELETE",

      // 🔐 FUTURO BACKEND
      // headers: {
      //   Authorization: `Bearer ${token}`
      // }
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// ⚠️ En backend:
// - Validar token
// - Verificar rol admin
// - NO confiar en el frontend


export const obtenerUnSoloJuegoAPI = async(id) =>{
    try
    {
        const respuesta = await fetch(`http://localhost:3000/juegos/${id}`)
        return respuesta
    }
    catch (error)
    {
        console.error(error)
        return false
    }
}

export const editarJuegoAPI = async(juegoAEditar,id) =>{
    try
    {
        const respuesta = await fetch(`http://localhost:3000/juegos/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(juegoAEditar)
        })
        return respuesta
    }
    catch (error)
    {
        console.error(error)
        return false
    }
}



// REGISTER
export const registerAPI = async (newUser) => {
  try {
    const res = await fetch(`${API_URL}/usuarios`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    });

    // 📩 FUTURO BACKEND
    // - Hashear password (bcrypt)
    // - Generar token de verificación
    // - Enviar email
    // - Guardar isVerified = false

    return res;
  } catch (error) {
    console.error(error);
    return false;
  }
};

// LOGIN
export const loginAPI = async (emailOrUsername) => {
  try {
    // ⚠️ SOLO PARA JSON-SERVER
    // En backend real:
    // POST /auth/login
    // body: { email, password }
    // response: { token, user }

    let res = await fetch(
      `${API_URL}/usuarios?email=${emailOrUsername}`
    );
    let data = await res.json();

    if (data.length === 0) {
      res = await fetch(
        `${API_URL}/usuarios?username=${emailOrUsername}`
      );
      data = await res.json();
    }

    if (data.length === 0) return null;

    return data[0];
  } catch (error) {
    console.error(error);
    return null;
  }
};

// ❌ Nunca validar contraseña en frontend
// ✔️ Backend compara bcrypt
// ✔️ Backend devuelve JWT


/*
================ FUTURO BACKEND =================

1) Reemplazar fetch directos por endpoints reales
2) Login devuelve JWT
3) Guardar token de forma segura
4) Agregar Authorization header
5) Validar roles en backend
6) Nunca confiar en datos del frontend

=================================================
*/

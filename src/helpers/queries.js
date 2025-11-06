// POST - crear producto - 201
// GET - obtener 1 o mas productos - 200
// DELETE - borrar 1 producto - 200
// PUT/PATCH - editar 1 producto

export const crearJuegoAPI = async(juegoNuevo) =>{
    try
    {
        const respuesta = await fetch(`http://localhost:3000/juegos`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(juegoNuevo)
        })
        return respuesta
    }
    catch (error)
    {
        console.error(error)
        return false
    }
}

export const listaJuegosAPI = async() =>{
    try
    {
        const respuesta = await fetch(`http://localhost:3000/juegos`)
        return respuesta
    }
    catch (error)
    {
        console.error(error)
        return false
    }
}

export const borrarJuegoAPI = async(id) =>{
    try
    {
        const respuesta = await fetch(`http://localhost:3000/juegos/${id}`,{
            method:"DELETE"
        })
        return respuesta
    }
    catch (error)
    {
        console.error(error)
        return false
    }
}

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

// usuario administrador
const userAdmin = {
    email: 'qvc@gmail.com',
    password: '1234'
}

export const login = (usuario) =>
{
    if(usuario.email === userAdmin.email && usuario.password === userAdmin.password) 
    {
        // guardamos el email en el session storage para que no se desloguee navegando de pagina en pagina
        sessionStorage.setItem('userKey',JSON.stringify(userAdmin.email))
        return true
    }
    else
    {
        return false
    }
}
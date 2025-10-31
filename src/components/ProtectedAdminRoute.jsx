import {Navigate} from 'react-router-dom'

function ProtectedAdminRoute({children}) {
  const userString = localStorage.getItem('user');
  
  // Si no hay usuario, redirigir
  if(!userString){
    console.log("NO PODES PASAR INTRUSO!!! - No hay usuario autenticado");    
    return <Navigate to="/home" replace /> 
  }

  try {
    const user = JSON.parse(userString);    

    // Verificar que el usuario tenga rol de admin
    if(user.role !== 'admin'){
      console.log("NO PODES PASAR INTRUSO!!! - No tienes permisos de administrador");    
      return <Navigate to="/home" replace /> 
    }
    
    // Si pasa todas las validaciones, permitir acceso
    console.log("Acceso autorizado al dashboard para:", user.email);
    return children;
    
  } catch (error) {
    console.error("Error al parsear datos del usuario:", error);
    return <Navigate to="/home" replace /> 
  }
}

export default ProtectedAdminRoute
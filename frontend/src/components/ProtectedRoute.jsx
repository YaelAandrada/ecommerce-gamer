import {Navigate} from 'react-router-dom'

function ProtectedRoute({children}) {
  const user = localStorage.getItem('user');

  // if(!user){
  //   console.log("NO PODES PASAR INTRUSO!!!");    
  //   return <Navigate to="/login" replace /> 
  // }

  return children
}

export default ProtectedRoute
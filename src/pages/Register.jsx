import { Link, useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import AuthLayout from '../components/AuthLayout'; 

function Register( setUser ) {
  const navigate = useNavigate();

  const handleRegister = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    navigate('/home');
  };

  return (
    <AuthLayout>
      {/* Izquierda: Bienvenida */}
      <div className="flex flex-col justify-center items-center text-white text-center px-4">
        <h2 className="text-4xl font-bold mb-4 text-cyan-300">¡Bienvenido!</h2>
        <p className="text-lg mb-6 text-gray-300">
          Registrate para unirte a la experiencia gamer
        </p>
        <Link
          to="/login"
          className="text-cyan-400 hover:text-cyan-300 underline text-sm"
        >
          ¿Ya tenés cuenta? Iniciá sesión acá
        </Link>
      </div>

      {/* Derecha: Formulario de registro */}
      <div className="space-y-6 text-white">
        <h2 className="text-3xl font-extrabold text-center text-cyan-300">Crear Cuenta</h2>
        <RegisterForm onRegister={handleRegister} />
      </div>
    </AuthLayout>
  );
}

export default Register;
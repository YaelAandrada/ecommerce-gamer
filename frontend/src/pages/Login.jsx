import { Link, useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import GoogleLoginButton from '../components/GoogleLoginButton';
import AuthLayout from '../components/AuthLayout'; // Asegurate que esté en esta ruta

function Login({ setUser }) {
  const navigate = useNavigate();

  const handleLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    navigate('/home');
  };

  return (
    <AuthLayout>
      {/* Izquierda: Bienvenida + Google */}
      <div className="flex flex-col justify-center items-center text-white text-center px-4">
        <h2 className="text-4xl font-bold mb-4 text-cyan-300">¡Hola, gamer!</h2>
        <p className="text-lg mb-6 text-gray-300">
          Accedé con tu cuenta de Google y empezá a jugar
        </p>
        <GoogleLoginButton onLogin={handleLogin} />
      </div>

      {/* Derecha: Formulario tradicional */}
      <div className="space-y-6 text-white">
        <h2 className="text-3xl font-extrabold text-center text-cyan-300">Iniciar Sesión</h2>
        <LoginForm onLogin={handleLogin} />
        <p className="text-center text-sm text-gray-400">
          ¿No tenés cuenta?{' '}
          <Link
            to="/register"
            className="text-cyan-400 hover:text-cyan-300 underline"
          >
            Registrate acá
          </Link>     </p>
      </div>
    </AuthLayout>
  );
}

export default Login;
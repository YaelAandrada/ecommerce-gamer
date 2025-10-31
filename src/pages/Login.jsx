import {Link, useNavigate} from 'react-router-dom'
import LoginForm from '../components/LoginForm';
import GoogleLoginButton from '../components/GoogleLoginButton';

function Login() {

  const navigate = useNavigate()

  const handleLogin = (userData) => {
    navigate('/home')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Iniciar Sesión
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          O{' '}
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            crea una cuenta nueva
          </Link>
        </p>
      </div>
      <LoginForm onLogin={handleLogin} />


      {/* Sección de login con google  */}
      <div className='mt-6'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300'></div>
            </div>
            <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-gray-50 text-gray-500'>O Continua Con</span>
            </div>
          </div>

            <div className='mt-6'>
                  <GoogleLoginButton  onLogin={handleLogin}/>
            </div>
      </div>
    </div>
  </div>
  )
}

export default Login
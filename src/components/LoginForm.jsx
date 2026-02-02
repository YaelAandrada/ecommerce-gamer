import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../utils/validationSchema';
import { toast } from 'react-toastify';
import Input from './Input';
import bcrypt from 'bcryptjs';



function LoginForm({onLogin}) {

  const {
    register,
    handleSubmit,
    formState:{errors, isSubmitting}
  } = useForm({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data) => {
    try {
       
      //simulando un login
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === data.email);

      if(user){      
        //comparamos la contraseña ingresada con el hash almacenado
        const isValidPassword =  await bcrypt.compare(data.password, user.password)

        if(isValidPassword){
          //no guardo la contraseña hasheada en el usaurio activo
          const userWithoutHash = {...user, password: undefined};
          localStorage.setItem('user', JSON.stringify(userWithoutHash))          
        onLogin(userWithoutHash)
        toast.success('¡Login Exitoso!')
        } else {
          toast.error('Credenciales incorrectas!')
        }
      } else {
        toast.error('Hubo un error al iniciar sesión')
      }      
    } catch (error) {
      console.log(error);      
      toast.error('Error en el login :(')
    }
  }



  return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="tu@email.com"
            register={register}
            error={errors.email}
          />

          <Input
            label="Contraseña"
            type="password"
            name="password"
            placeholder="••••••"
            register={register}
            error={errors.password}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
          {isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </button>
      </form>
  )
}

export default LoginForm
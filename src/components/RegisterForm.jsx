import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {registerSchema} from '../utils/validationSchema';
import {toast} from 'react-toastify';
import Input from './Input';
import bcrypt from 'bcryptjs';


function RegisterForm({onRegister}) {

  const {
    register,
    handleSubmit,
    formState:{errors, isSubmitting}
  } = useForm({
    resolver: zodResolver(registerSchema)
  })

  const onSubmit = async (data) => {
    try {
      const {confirmPassword, ...userData} = data;

      //guardar en localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]')

      //verificar si el usuario ya existe
      if(users.find(u => u.email === userData.email)){
        toast.error('El Usuario ya existe')
        return
      }

      //hasheamos la contraseña   
      const hashedPassword = await bcrypt.hash(userData.password, 12)
      console.log(hashedPassword);      

      //creo el usuario con la contraseña encriptada
      const userToSave = {
        ...userData,
        password: hashedPassword
      }


      users.push(userToSave);
      localStorage.setItem('users', JSON.stringify(users));
    
     //aca no guardamos la contraseña en el usuario que está activo
      const userWithoutHash = {...userData, password: undefined}
      localStorage.setItem('user', JSON.stringify(userWithoutHash))


      onRegister(userToSave);
      toast.success('Registro exitoso :)')      
    } catch (error) {
      console.log(error);      
      toast.error('Error en el registro :(')
    }
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

    <Input
      label="Usuario"
      type="text"
      name="username"
      placeholder="Tu usuario"
      register={register}
      error={errors.username}
    />

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

    <Input
      label="Confirmar Contraseña"
      type="password"
      name="confirmPassword"
      placeholder="••••••"
      register={register}
      error={errors.confirmPassword}
    />

    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
    >
      {isSubmitting ? 'Registrando...' : 'Registrarse'}
    </button>
  </form>
  )
}

export default RegisterForm


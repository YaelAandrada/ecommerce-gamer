import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../utils/validationSchema';
import { toast } from 'react-toastify';
import Input from './Input';
import bcrypt from 'bcryptjs';
import GoogleLoginButton from './GoogleLoginButton'; // Asegurate que esté en el mismo nivel

function RegisterForm({ onRegister }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data) => {
    try {
      const { confirmPassword, ...userData } = data;
      const users = JSON.parse(localStorage.getItem('users') || '[]');

      if (users.find(u => u.email === userData.email)) {
        toast.error('El Usuario ya existe');
        return;
      }

      const hashedPassword = await bcrypt.hash(userData.password, 12);
      const userToSave = {
        ...userData,
        password: hashedPassword
      };

      users.push(userToSave);
      localStorage.setItem('users', JSON.stringify(users));

      const userWithoutHash = { ...userData, password: undefined };
      localStorage.setItem('user', JSON.stringify(userWithoutHash));

      onRegister(userToSave);
      toast.success('Registro exitoso :)');
    } catch (error) {
      console.log(error);
      toast.error('Error en el registro :(');
    }
  };

  const handleGoogleRegister = async (user) => {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');

      if (!users.find(u => u.email === user.email)) {
        const userToSave = {
          username: user.displayName || 'GoogleUser',
          email: user.email,
          photoURL: user.photoURL,
          password: null
        };

        users.push(userToSave);
        localStorage.setItem('users', JSON.stringify(users));
      }

      const userWithoutHash = {
        username: user.displayName || 'GoogleUser',
        email: user.email,
        photoURL: user.photoURL
      };

      localStorage.setItem('user', JSON.stringify(userWithoutHash));
      onRegister(userWithoutHash);
      toast.success('Registro con Google exitoso!');
    } catch (error) {
      console.error(error);
      toast.error('Error al registrar con Google');
    }
  };

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

      <div className="relative flex items-center justify-center">
        <span className="px-2 text-sm text-gray-400">o</span>
      </div>

      <GoogleLoginButton onLogin={handleGoogleRegister} />
    </form>
  );
}

export default RegisterForm;
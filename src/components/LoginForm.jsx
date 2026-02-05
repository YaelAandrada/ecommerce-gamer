import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../utils/validationSchema';
import { toast } from 'react-toastify';
import Input from './Input';
import bcrypt from 'bcryptjs';

function LoginForm({ onLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data) => {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(
        u =>
          u.email === data.identifier ||
          u.username === data.identifier
      );

      if (!user) {
        toast.error('Usuario o email no encontrado');
        return;
      }

      const isValidPassword = await bcrypt.compare(
        data.password,
        user.password
      );

      if (!isValidPassword) {
        toast.error('Credenciales incorrectas');
        return;
      }

      // 🔐 Usuario limpio y consistente
      const userWithoutHash = {
        id: user.id,
        email: user.email,
        name: user.name || user.username || 'Usuario',
        role: user.role || 'user',
      };

      localStorage.setItem('user', JSON.stringify(userWithoutHash));
      onLogin(userWithoutHash);
      toast.success('¡Login exitoso!');

    } catch (error) {
      console.error(error);
      toast.error('Error en el login :(');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Usuario o Email"
        type="text"
        name="identifier"
        placeholder="usuario o email"
        register={register}
        error={errors.identifier}
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
        className="w-full flex justify-center py-2 px-4 rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'}
      </button>
    </form>
  );
}

export default LoginForm;

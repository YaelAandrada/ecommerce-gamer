import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../utils/validationSchema';
import { registerAPI } from "../helpers/queries";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Input from './Input';
import GoogleLoginButton from './GoogleLoginButton';

function RegisterForm({ onRegister }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data) => {
    try {
      const newUser = {
        username: data.username,
        email: data.email,
        password: data.password
      };

      const response = await registerAPI(newUser);

      if (response?.error) {
        toast.error(response.error);
        return;
      }

      toast.success("Usuario creado correctamente");
      navigate("/login");

      if (onRegister) {
        onRegister();
      }

    } catch (error) {
      console.error(error);
      toast.error("Error en registro");
    }
  };

  const handleGoogleRegister = async (user) => {
    try {
      const userWithoutHash = {
        username: user.displayName || "GoogleUser",
        email: user.email,
        photoURL: user.photoURL
      };

      localStorage.setItem("user", JSON.stringify(userWithoutHash));

      if (onRegister) {
        onRegister(userWithoutHash);
      }

      toast.success("Registro con Google exitoso!");
    } catch (error) {
      console.error(error);
      toast.error("Error al registrar con Google");
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
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50"
      >
        {isSubmitting ? "Registrando..." : "Registrarse"}
      </button>

      <div className="relative flex items-center justify-center">
        <span className="px-2 text-sm text-gray-400">o</span>
      </div>

      <GoogleLoginButton onLogin={handleGoogleRegister} />
    </form>
  );
}

export default RegisterForm;

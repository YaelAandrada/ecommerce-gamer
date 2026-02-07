import { useForm } from 'react-hook-form';
import bcrypt from 'bcryptjs';
import { loginAPI } from "../helpers/queries";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function LoginForm({ onLogin }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    const { emailOrUsername, password } = data;

    const user = await loginAPI(emailOrUsername, password);

    if (!user) {
      toast.error("Email/usuario o contraseña incorrectos");
      return;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      toast.error("Email/usuario o contraseña incorrectos");
      return;
    }

    // Guardamos usuario completo
    const userWithoutPassword = { ...user, password: undefined };
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    onLogin(userWithoutPassword);
    toast.success('¡Bienvenido!');
    navigate("/home");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        type="text"
        placeholder="Email o usuario"
        {...register("emailOrUsername", { required: true })}
        className="border p-2 w-full"
      />

      <input
        type="password"
        placeholder="Contraseña"
        {...register("password", { required: true })}
        className="border p-2 w-full"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white p-2 w-full"
      >
        Iniciar sesión
      </button>
    </form>
  );
}

export default LoginForm;

import { useForm } from "react-hook-form";
import { loginAPI } from "../helpers/queries";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm({ onLogin }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    const { emailOrUsername, password } = data;

    try {
      const response = await loginAPI(emailOrUsername, password);

      if (!response) {
        toast.error("Credenciales incorrectas");
        return;
      }

      // Guardamos token y usuario
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response));

      // Llamamos a la función que viene de App.jsx
      onLogin(response, response.token);

      toast.success("¡Bienvenido!");

      if (response.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } catch (error) {
      toast.error("Error al iniciar sesión");
    }
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
import { useForm } from "react-hook-form";
import { loginAPI } from "../helpers/queries";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm({ onLogin }) {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await loginAPI({
        email: data.emailOrUsername,
        password: data.password
      });

      if (!res || !res.token) {
        toast.error("Email o contraseña incorrectos");
        return;
      }

      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      onLogin(res.user);
      toast.success("¡Bienvenido!");
      navigate("/home");

    } catch (error) {
      console.error(error);
      toast.error("Error en login");
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

      <button type="submit" disabled={isSubmitting}
        className="bg-blue-600 text-white p-2 w-full">
        {isSubmitting ? "Ingresando..." : "Iniciar sesión"}
      </button>

    </form>
  );
}

export default LoginForm;
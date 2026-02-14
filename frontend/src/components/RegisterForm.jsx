import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../utils/validationSchema';
import { registerAPI } from "../helpers/queries";
import { toast } from 'react-toastify';
import Input from './Input';
import GoogleLoginButton from './GoogleLoginButton';

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
    const newUser = {
      username: data.username,
      email: data.email,
      password: data.password
    };

    const res = await registerAPI(newUser);
    const dataRes = await res.json();

    if (res.ok) {
      toast.success("Registro exitoso 🎉");
      onRegister && onRegister();
    } else {
      toast.error(dataRes.msg || "Error al registrar");
    }

  } catch (error) {
    console.error(error);
    toast.error("Error en registro");
  }
};


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

      <Input label="Usuario" type="text" name="username" register={register} error={errors.username} />
      <Input label="Email" type="email" name="email" register={register} error={errors.email} />
      <Input label="Contraseña" type="password" name="password" register={register} error={errors.password} />
      <Input label="Confirmar contraseña" type="password" name="confirmPassword" register={register} error={errors.confirmPassword} />

      <button type="submit" disabled={isSubmitting}
        className="w-full bg-green-600 text-white p-2 rounded">
        {isSubmitting ? "Registrando..." : "Registrarse"}
      </button>

      <GoogleLoginButton />
    </form>
  );
}

export default RegisterForm;

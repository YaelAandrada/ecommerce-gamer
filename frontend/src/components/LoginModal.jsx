import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../utils/validationSchema';
import { toast } from 'react-toastify';
import Input from './Input';
import bcrypt from 'bcryptjs';

function LoginModal({ onLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(loginSchema)
  });

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Función que se encarga de manejar el login del usuario.
 * Toma los datos del formulario y busca en la lista de usuarios
 * si existe un usuario con el email proporcionado. Si existe,
 * compara la contraseña del usuario con la contraseña hasheada
 * almacenada en el usuario encontrado. Si las contraseñas
 * coinciden, guarda el usuario sin la contraseña en el
 * localStorage y llama a la función onLogin con el usuario
 * sin contraseña. De lo contrario, muestra un mensaje de
 * error.
 * @param {Object} data - Los datos del formulario
 * @returns {Promise<void>} - No devuelve nada
/*******  75b1e0be-71a2-40a8-89b1-3b232f857cac  *******/
  const onSubmit = async (data) => {
    try {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === data.email);

      if (user) {
        const isValidPassword = await bcrypt.compare(data.password, user.password);

        if (isValidPassword) {
          const userWithoutHash = { ...user, password: undefined };
          localStorage.setItem('user', JSON.stringify(userWithoutHash));
          onLogin(userWithoutHash);
          toast.success('¡Login Exitoso!');
        } else {
          toast.error('Credenciales incorrectas!');
        }
      } else {
        toast.error('Hubo un error al iniciar sesión');
      }
    } catch (error) {
      console.log(error);
      toast.error('Error en el login :(');
    }
  };

  // después de onLogin(userWithoutHash) y toast.success(...)
  if (typeof window !== 'undefined' && window.bootstrap) {
    const modalEl = document.getElementById('loginModal');
  if (modalEl) {
    const modalInstance = window.bootstrap.Modal.getInstance(modalEl) || new window.bootstrap.Modal(modalEl);
    modalInstance.hide();
  }
}


  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >

      {/* 👇 Esta clase centra el modal verticalmente */}
      <div className="modal-dialog modal-dialog-centered">

        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">Iniciar Sesión</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>

              {/* Email */}
              <div className="mb-3">
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  register={register}
                  error={errors.email}
                />
              </div>

              {/* Contraseña */}
              <div className="mb-3">
                <Input
                  label="Contraseña"
                  type="password"
                  name="password"
                  placeholder="•••••"
                  register={register}
                  error={errors.password}
                />
              </div>

              {/* Botón */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-100"
              >
                {isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </button>

              

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;




// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { loginSchema } from '../utils/validationSchema';
// import { toast } from 'react-toastify';
// import Input from './Input';
// import bcrypt from 'bcryptjs';



// function LoginForm({onLogin}) {

//   const {
//     register,
//     handleSubmit,
//     formState:{errors, isSubmitting}
//   } = useForm({
//     resolver: zodResolver(loginSchema)
//   })

//   const onSubmit = async (data) => {
//     try {
       
//       //simulando un login
//       const users = JSON.parse(localStorage.getItem('users') || '[]');
//       const user = users.find(u => u.email === data.email);

//       if(user){      
//         //comparamos la contraseña ingresada con el hash almacenado
//         const isValidPassword =  await bcrypt.compare(data.password, user.password)

//         if(isValidPassword){
//           //no guardo la contraseña hasheada en el usaurio activo
//           const userWithoutHash = {...user, password: undefined};
//           localStorage.setItem('user', JSON.stringify(userWithoutHash))          
//         onLogin(userWithoutHash)
//         toast.success('¡Login Exitoso!')
//         } else {
//           toast.error('Credenciales incorrectas!')
//         }
//       } else {
//         toast.error('Hubo un error al iniciar sesión')
//       }      
//     } catch (error) {
//       console.log(error);      
//       toast.error('Error en el login :(')
//     }
//   }



//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//     <Input
//       label="Email"
//       type="email"
//       name="email"
//       placeholder="tu@email.com"
//       register={register}
//       error={errors.email}
//     />

//     <Input
//       label="Contraseña"
//       type="password"
//       name="password"
//       placeholder="••••••"
//       register={register}
//       error={errors.password}
//     />

//     <button
//       type="submit"
//       disabled={isSubmitting}
//       className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
//     >
//       {isSubmitting ? 'Iniciando sesión...' : 'Iniciar Sesión'}
//     </button>
//   </form>
//   )
// }

// export default LoginForm
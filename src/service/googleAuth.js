import {signInWithPopup, signOut as firebaseSignOut} from 'firebase/auth';
import {auth, googleProvider} from '../config/firebase';

class GoogleAuthService {
        // método para login con google    
        async loginWithGoogle(){
            try {
               const result = await signInWithPopup(auth, googleProvider); 
               const user = result.user;               
               
               //crear un objeto de usuario que sea compatible con nuestra app existente
               const userData = {
                id: user.id,
                email: user.email,
                username: user.displayName || user.email.split('@')[0],
                name: user.displayName,
                photoURL: user.photoURL,
                provider: 'google',
                role: user.email === 'ezequiel.munoz.dev.js@gmail.com' ? 'admin' : 'user'            
               };

               //guardarlo en localstorage igual que hicimos en el form original
               localStorage.setItem('user', JSON.stringify(userData));

                const users = JSON.parse(localStorage.getItem('users') || '[]')

                 users.push(userData);
                 localStorage.setItem('users', JSON.stringify(users));
                 
               return userData

            } catch (error) {
                throw new Error(this.getErrorMessage(error.code))
            }
        }

        //metodo para logout de google
        async logout() {
            try {
                if(auth.currentUser){
                    await firebaseSignOut(auth)
                }
                
            } catch (error) {
                console.error('Error al cerrar sesión de Google: ', Error);                
            }
        }

        // Método para manejar los errores de google
        getErrorMessage(errorCode) {
            switch (errorCode) {
              case 'auth/popup-closed-by-user':
                return 'Login cancelado por el usuario';
              case 'auth/popup-blocked':
                return 'Popup bloqueado. Permite popups para este sitio';
              case 'auth/network-request-failed':
                return 'Error de conexión. Verifica tu internet';
              case 'auth/too-many-requests':
                return 'Demasiados intentos. Intenta más tarde';
              default:
                return 'Error al iniciar sesión con Google';
            }
          }
}

//crear una instancia única del servicio
const googleAuthService = new GoogleAuthService();

export default googleAuthService;
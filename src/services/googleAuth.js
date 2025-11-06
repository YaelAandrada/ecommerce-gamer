import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD0tRGG8tmm9nHcBxFZSCtlx4SHMSKt8z4",
  authDomain: "ecommerce-gamer-9f5e9.firebaseapp.com",
  projectId: "ecommerce-gamer-9f5e9",
  storageBucket: "ecommerce-gamer-9f5e9.firebasestorage.app",
  messagingSenderId: "352578332517",
  appId: "1:352578332517:web:5075847ff319f38ea7238c",
  measurementId: "G-C6S33ML1FN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const login = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user; // ✅ devolvés el usuario al componente
};

export { auth, googleProvider, login };
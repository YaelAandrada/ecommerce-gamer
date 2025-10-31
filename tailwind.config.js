/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Escanea todos los archivos dentro de /src
  ],
  theme: {
    extend: {
      colors: {
        fondoGamer: "#08152e", // ejemplo para tu fondo gamer
      },
    },
  },
  plugins: [],
}
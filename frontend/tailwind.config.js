/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Escanea todos los archivos dentro de /src
  ],
  theme: {
    extend: {
     backgroundImage: {
  'gamer-wall': "url('/img/retro.webp')", // ✅ desde public
},
      backgroundSize: {
        'grid': '40px 40px',
      },
      fontFamily: {
        gamer: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
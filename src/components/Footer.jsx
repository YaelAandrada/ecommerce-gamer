// components/Footer.jsx
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" dark:bg-gray-900 text-gray-300 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Navegación */}
        <nav className="flex flex-wrap gap-6 gap-y-4 text-m justify-center">
          <a href="/Home" className="hover:text-white">Inicio</a>
          <a href="/sobrenosotros" className="hover:text-white">Nosotros</a>
          <a href="/arriba" className="hover:text-white">Arriba</a>
          
        </nav>

        
        <div className="flex gap-6 text-3xl justify-center mt-4">
  <a
    href="https://www.facebook.com/groups/254916618929439/"
    aria-label="Facebook" target='_blank'
    className="hover:text-[#1877F2] hover:bg-white/10 hover:scale-110 p-2 rounded-full transition-all duration-300"
  >
    <FaFacebook />
  </a>
  <a
    href="https://instagram.com"
    aria-label="Instagram" target='_blank'
    className="hover:text-[#E1306C] hover:bg-white/10 hover:scale-110 p-2 rounded-full transition-all duration-300"
  >
    <FaInstagram />
  </a>
  <a
    href="https://es.wikipedia.org/wiki/Twitter"
    aria-label="Twitter" target='_blank'
    className="hover:text-[#1DA1F2] hover:bg-white/10 hover:scale-110 p-2 rounded-full transition-all duration-300"
  >
    <FaTwitter />
  </a>
  <a
    href="https://github.com/YaelAandrada/ecommerce-gamer"
    aria-label="GitHub" target='_blank'
    className="hover:text-white hover:bg-white/10 hover:scale-110 p-2 rounded-full transition-all duration-300"


  >
    <FaGithub />
  </a>
  <a
    href="https://www.youtube.com/watch?v=ONiyQ-SXX0A&list=PLBm57qGHyd7C_ThC88Kj-KExsP7T2JFTK&index=15"
    aria-label="YouTube"
    className="hover:text-[#FF0000] hover:bg-white/10 hover:scale-110 p-2 rounded-full transition-all duration-300"target='_blank'
  >
    <FaYoutube />
  </a>
</div>

      </div>

      
      <div className="mt-8 text-center text-xs text-gray-400">
        © 2025 Derechos reservados a los pibes de rollingCode
      </div>
    </footer>
  );
};

export default Footer;

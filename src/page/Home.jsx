import React from 'react';
import './Home.css';

// import { FaShoppingCart } from 'react-icons/fa'; // Ya no lo necesitamos
import { Link } from "react-router-dom";
import ProductCard from '../components/ProductCard.jsx';
import freefireImage from '../img/freefire.png';
import valorantImage from '../img/valorant.jpg';
import steamImage from '../img/steam.jfif';
import mobilelegendImage from '../img/mobilelegends.png';
import csgoImage from '../img/csgo.jpg';
import legendsImage from '../img/legends.avif';
import marvelImage from '../img/marvel.jpg';
import rainbowImage from '../img/rainbow.jpeg';
import robloxImage from '../img/roblox.jpg';
import starrailImage from '../img/starrail.jpg';
import pokemonImage from '../img/pokemon.webp';
import minecraftImage from '../img/minecraft.jfif';
import gratisImage from   '../img/gratis.jfif'
import neonImage from '../img/neon.png';
import neon2Image from '../img/neon2.png';
import neon3Image from '../img/neon3.png';
import gtavImage from '../img/gtav.jpg';
import redImage  from '../img/red.jfif';

function Home() {
  


  
  

  return (
    
    <div className='home-container'>
    <div id="carouselGamer" className="carousel slide mb-4 mx-auto" data-bs-ride="carousel" style={{ maxWidth: '780px' }}>




  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={neonImage} className="d-block w-100" alt="NeonByte" style={{ height: '500px', objectFit: 'cover' }} />
    </div>
    <div className="carousel-item">
      <img src={neon2Image} className="d-block w-100" alt="NeonByte" style={{ height: '500px', objectFit: 'cover' }} />
    </div>
    <div className="carousel-item">
      <img src={neon3Image} className="d-block w-100" alt="NeonByte" style={{ height: '500px', objectFit: 'cover' }} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselGamer" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Anterior</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselGamer" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Siguiente</span>
  </button>
</div>


      {/* Sección promocional */}
      <div className="promo-boxes">
  <div className="promo-box">
    <Link to="/juegos" className="promo-content">
      <div
        className="cart-icon"
        dangerouslySetInnerHTML={{
          __html: `<lord-icon
            src="https://cdn.lordicon.com/slkvcfos.json"
            trigger="hover"
            colors="primary:#00ff99"
            style="width:40px;height:40px">
          </lord-icon>`
        }}
      />
      <div>
        <h3>Comprá</h3>
        <div>
  <p className="promo-text">Comprá y acumulá BNX Coins.</p>
</div>

      </div>
    </Link>
  </div>

  <div className="promo-box">
    <div className="promo-content inactive">
      <div
        className="promo-icon"
        dangerouslySetInnerHTML={{
          __html: `<lord-icon
            src="https://cdn.lordicon.com/kthelypq.json"
            trigger="hover"
            colors="primary:#00ff99"
            style="width:40px;height:40px">
          </lord-icon>`
        }}
      />
      <div>
        <h3>Jugá <span className="new-badge">¡Nuevo!</span></h3>
        <p className="promo-text">Andá a la sección Gamify y divertite.</p>
      </div>
    </div>
  </div>

  <div className="promo-box">
    <div className="promo-content inactive">
      <div
        className="promo-icon"
        dangerouslySetInnerHTML={{
          __html: `<lord-icon
            src="https://cdn.lordicon.com/xljvqlng.json"
            trigger="hover"
            colors="primary:#00ff99"
            style="width:40px;height:40px">
          </lord-icon>`
        }}
      />
      <div>
        <h3>Canjeá</h3>
        <p className="promo-text">Canjeá premios con tus coins.</p>
      </div>
    </div>
  </div>
</div>


      {/* Catálogo principal */}
<div className='container-card'>
  <h2 className='section-title'>Recomendados para ti</h2>
<div className="d-flex gap-3 flex-wrap justify-content-center px-2 pb-4">




   <div className="card card-hover bg-dark text-white border-success" style={{ width: '450px' }}>

  <img src={freefireImage} className="card-img-top img-fluid" alt="Free Fire" style={{ height: '200px', objectFit: 'cover' }} />
  <div className="card-body text-center p-3">
    <h5 className="card-title mb-0">Free Fire</h5>
  </div>
</div>


   <div className="card card-hover bg-dark text-white border-success" style={{ width: '450px' }}>

  <img src={valorantImage} className="card-img-top img-fluid" alt="Free Fire" style={{ height: '200px', objectFit: 'cover' }} />
  <div className="card-body text-center p-3">
    <h5 className="card-title mb-0">Valorant</h5>
  </div>
</div>


     <div className="card card-hover bg-dark text-white border-success" style={{ width: '450px' }}>

  <img src={steamImage} className="card-img-top img-fluid" alt="Free Fire" style={{ height: '200px', objectFit: 'cover' }} />
  <div className="card-body text-center p-3">
    <h5 className="card-title mb-0" >Steam</h5>
  </div>
</div>
  </div>

<h2 className='section-title'>Populares</h2>
<div className="scroll-populares d-flex flex-nowrap gap-2 px-2 pb-2 mb-4">

  <div className="card card-hover bg-dark text-white border-success" style={{ width: '160px' }}>

    <img src={mobilelegendImage} className="card-img-top img-fluid" alt="Mobile Legends" style={{ height: '80px', objectFit: 'cover' }} />
    <div className="card-body text-center p-2">
      <h6 className="card-title mb-0" style={{ fontSize: '0.85rem' }}>Mobile Legends - Recarga Única</h6>
    </div>
  </div>

  <div className="card card-hover bg-dark text-white border-success" style={{ width: '160px' }}>

    <img src={csgoImage} className="card-img-top img-fluid" alt="Counter Strike 2" style={{ height: '80px', objectFit: 'cover' }} />
    <div className="card-body text-center p-2">
      <h6 className="card-title mb-0" style={{ fontSize: '0.85rem' }}>Counter Strike 2</h6>
    </div>
  </div>

 <div className="card card-hover bg-dark text-white border-success" style={{ width: '160px' }}>

    <img src={legendsImage} className="card-img-top img-fluid" alt="League of Legends" style={{ height: '80px', objectFit: 'cover' }} />
    <div className="card-body text-center p-2">
      <h6 className="card-title mb-0" style={{ fontSize: '0.85rem' }}>League of Legends</h6>
    </div>
  </div>

  <div className="card card-hover bg-dark text-white border-success" style={{ width: '160px' }}>

    <img src={marvelImage} className="card-img-top img-fluid" alt="Marvel Rivals" style={{ height: '80px', objectFit: 'cover' }} />
    <div className="card-body text-center p-2">
      <h6 className="card-title mb-0" style={{ fontSize: '0.85rem' }}>Marvel Rivals</h6>
    </div>
  </div>

  <div className="card card-hover bg-dark text-white border-success" style={{ width: '160px' }}>

    <img src={rainbowImage} className="card-img-top img-fluid" alt="Rainbow Six Mobile" style={{ height: '80px', objectFit: 'cover' }} />
    <div className="card-body text-center p-2">
      <h6 className="card-title mb-0" style={{ fontSize: '0.85rem' }}>Rainbow Six Mobile</h6>
    </div>
  </div>

  <div className="card card-hover bg-dark text-white border-success" style={{ width: '160px' }}>

    <img src={robloxImage} className="card-img-top img-fluid" alt="Roblox" style={{ height: '80px', objectFit: 'cover' }} />
    <div className="card-body text-center p-2">
      <h6 className="card-title mb-0" style={{ fontSize: '0.85rem' }}>Roblox</h6>
    </div>
  </div>

  <div className="card card-hover bg-dark text-white border-success" style={{ width: '160px' }}>

    <img src={starrailImage} className="card-img-top img-fluid" alt="Honkai Star Rail" style={{ height: '80px', objectFit: 'cover' }} />
    <div className="card-body text-center p-2">
      <h6 className="card-title mb-0" style={{ fontSize: '0.85rem' }}>Honkai Star Rail</h6>
    </div>
  </div>
    <div className="card card-hover bg-dark text-white border-success" style={{ width: '160px' }}>

    <img src={pokemonImage} className="card-img-top img-fluid" alt="Honkai Star Rail" style={{ height: '80px', objectFit: 'cover' }} />
    <div className="card-body text-center p-2">
      <h6 className="card-title mb-0" style={{ fontSize: '0.85rem' }}>Pokemon</h6>
    </div>
  </div>
    <div className="card card-hover bg-dark text-white border-success" style={{ width: '160px' }}>

    <img src={minecraftImage} className="card-img-top img-fluid" alt="Honkai Star Rail" style={{ height: '80px', objectFit: 'cover' }} />
    <div className="card-body text-center p-2">
      <h6 className="card-title mb-0" style={{ fontSize: '0.85rem' }}>minecraft</h6>
    </div>
  </div>
    <div className="card card-hover bg-dark text-white border-success" style={{ width: '160px' }}>

    <img src={gratisImage} className="card-img-top img-fluid" alt="Honkai Star Rail" style={{ height: '80px', objectFit: 'cover' }} />
    <div className="card-body text-center p-2">
      <h6 className="card-title mb-0" style={{ fontSize: '0.85rem' }}>Juegos gratis</h6>
    </div>
  </div>
    <div className="card card-hover bg-dark text-white border-success" style={{ width: '160px' }}>

    <img src={gtavImage} className="card-img-top img-fluid" alt="Honkai Star Rail" style={{ height: '80px', objectFit: 'cover' }} />
    <div className="card-body text-center p-2">
      <h6 className="card-title mb-0" style={{ fontSize: '0.85rem' }}>GTA V</h6>
    </div>
  </div>
    <div className="card card-hover bg-dark text-white border-success" style={{ width: '160px' }}>

    <img src={redImage} className="card-img-top img-fluid" alt="Honkai Star Rail" style={{ height: '80px', objectFit: 'cover' }} />
    <div className="card-body text-center p-2">
      <h6 className="card-title mb-0" style={{ fontSize: '0.85rem' }}>Red Dead Redemption</h6>
    </div>
  </div>
  
  
  
</div>



  <h2>Ver store</h2>
</div>


      {/* Novedades + Quiz */} 
      <div className="row g-3"> 
        <div className="col-md-8"> 
          <h2 className="h5 text-success mb-3">Novedades Gamer</h2>
           {[pokemonImage, minecraftImage, gratisImage].map((img, i) => (
            <div className="noticia-wrapper" key={i}>
  <div className="noticia-box d-flex gap-3 p-2">
    <img src={img} alt="Noticia" className="img-fluid rounded" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
    <div>
      <h6 className="mb-1">Título de la noticia {i + 1}</h6>
      <p className="mb-0">Descripción breve de la noticia.</p>
    </div>
  </div>
         </div> ))}
       </div>

        <div className="quiz-box card bg-dark text-white border-success ">
          <h2 className="section-title">Quiz Diario</h2>
          <p>Demostrá cuánto sabés. ¡Jugá y sorprendete con tus resultados!</p>
          <div className="d-flex flex-column gap-2">

            <p className="mb-2">¿Cuál de estos juegos es un shooter táctico?</p>
             <button className="btn btn-outline-success" onClick={() => alert('Incorrecto. LoL es un MOBA.')}>League of Legends</button>
      <button className="btn btn-outline-success" onClick={() => alert('¡Correcto! Valorant es un shooter táctico.')}>Valorant</button>
      <button className="btn btn-outline-success" onClick={() => alert('Incorrecto. Roblox es una plataforma de juegos.')}>Roblox</button>
          </div>
        </div>
      </div>
    </div>
    
  );
  
}

export default Home;

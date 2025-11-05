import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import ProductCard from '../components/ProductCard.jsx';
import siImage from '../img/si.jpg'; // ejemplo de imagen local
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

function Home() {
  const featuredProducts = [
    {
      title: 'Free Fire',
      image: freefireImage,
      customClass: 'card-featured',
    },
    {
      title: 'Valorant',
      image: valorantImage,
      customClass: 'card-featured',
    },
    {
      title: 'Steam',
      image: steamImage,
      customClass: 'card-featured',
    }
  ];

  const products = [
    {
      title: 'Mobile Legends - Recarga Única',
      image: mobilelegendImage,
      customClass: 'card-scroll',
    },
    
    {
      title: 'Counter Strike 2',
      image: csgoImage,
      customClass: 'card-scroll',
    },
    {
      title: 'League of Legends',
      image: legendsImage,
      customClass: 'card-scroll',
    },
    {
      title: 'Marvel Rivals',
      image: marvelImage,
      customClass: 'card-scroll',
    },
    {
      title: 'Rainbow Six Mobile',
      image: rainbowImage,
      customClass: 'card-scroll',
    },
    {
      title: 'Roblox',
      image: robloxImage,
      customClass: 'card-scroll',
    },
    {
      title: 'Honkai Star Rail',
      image: starrailImage,
      customClass: 'card-scroll',
    }
  ];

  return (
    <div className='home-container'>
      <h1>Catálogo Gamer</h1>

      {/*  Seccion promocional arriba del catálogo */}
      <div className="promo-boxes">
  <div className="promo-box">
    <Link to="/juegos" className="promo-content">
      <div className="promo-icon">🛒</div>
      <div>
        <h3>Comprá</h3>
        <p>Comprá y acumulá BNX Coins.</p>
      </div>
    </Link>
  </div>

  <div className="promo-box">
    <div className="promo-content inactive">
      <div className="promo-icon">🎮</div>
      <div>
        <h3>Jugá <span className="new-badge">¡Nuevo!</span></h3>
        <p>Andá a la sección Gamify y divertite.</p>
      </div>
    </div>
  </div>

  <div className="promo-box">
    <div className="promo-content inactive">
      <div className="promo-icon">🎁</div>
      <div>
        <h3>Canjeá</h3>
        <p>Canjeá premios con tus coins.</p>
      </div>
    </div>
  </div>
</div>


      {/*  Catálogo principal */}
      <div className='container-card'>
        <h2 className='section-title'>Recomendados para ti</h2>
        <div className='featured-grid'>
          {featuredProducts.map((item, index) => (
            <ProductCard
              key={index}
              title={item.title}
              image={item.image}
              customClass={item.customClass}
            />
          ))}
        </div>

        <h2 className='section-title'>Populares</h2>
        <div className='scroll-row'>
          {products.map((item, index) => (
            <ProductCard
              key={index}
              title={item.title}
              image={item.image}
              customClass={item.customClass}
            />
          ))}
        </div>
        <h2>Ver store</h2>
      </div>

      {/*  Novedades Gamer + quiz diario como cajas separadas */}
      <div className="dual-box-row">
        {/* Novedades Gamer */}
        <div className="news-box">
          <h2 className="section-title">Novedades Gamer</h2>
          <div className="news-item">
            <img src={siImage} alt="Pokemon Retro" className="news-thumb" />
            <div>
              <h4>POKEMON ROJO Y AZUL | BNX RETRO</h4>
              <p>Revive los clásicos con estilo retro.</p>
            </div>
          </div>
          <div className="news-item">
            <img src={siImage} alt="Animal Crossing" className="news-thumb" />
            <div>
              <h4>EL MISTERIO DE LAS 3AM EN ANIMAL CROSSING</h4>
              <p>Descubrí los secretos ocultos del juego.</p>
            </div>
          </div>
          <div className="news-item">
            <img src={siImage} alt="Juegos Gratis" className="news-thumb" />
            <div>
              <h4>JUEGOS GRATIS DE LA SEMANA</h4>
              <p>Descargá sin pagar y disfrutá.</p>
            </div>
          </div>
        </div>

        {/* quiz diario */}
        <div className="quiz-box">
          <h2 className="section-title">Quiz Diario</h2>
          <p>Demostrá cuánto sabés. ¡Jugá y sorprendete con tus resultados!</p>
          <button className="quiz-button">Jugar ya</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

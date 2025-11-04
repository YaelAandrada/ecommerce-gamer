import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import ProductCard from '../components/ProductCard.jsx';
import siImage from '../img/si.jpg'; // ejemplo de imagen local

function Home() {
  const featuredProducts = [
    {
      title: 'Free Fire',
      image: siImage,
      customClass: 'card-featured',
    },
    {
      title: 'Valorant',
      image: siImage,
      customClass: 'card-featured',
    },
    {
      title: 'Steam',
      image: siImage,
      customClass: 'card-featured',
    }
  ];

  const products = [
    {
      title: 'Mobile Legends - Recarga Única',
      image: siImage,
      customClass: 'card-scroll',
    },
    {
      title: 'Mobile Legends - Doble Recarga',
      image: siImage,
      customClass: 'card-scroll',
    },
    {
      title: 'Counter Strike 2',
      image: siImage,
      customClass: 'card-scroll',
    },
    {
      title: 'League of Legends',
      image: siImage,
      customClass: 'card-scroll',
    },
    {
      title: 'Marvel Rivals',
      image: siImage,
      customClass: 'card-scroll',
    },
    {
      title: 'Rainbow Six Mobile',
      image: siImage,
      customClass: 'card-scroll',
    },
    {
      title: 'Roblox',
      image: siImage,
      customClass: 'card-scroll',
    },
    {
      title: 'Honkai Star Rail',
      image: siImage,
      customClass: 'card-scroll',
    }
  ];

  return (
    <div className='home-container'>
      <h1>Catálogo Gamer</h1>

      {/* 🔥 Sección promocional arriba del catálogo */}
      <div className='promo-banner'>
        <div className='promo-item'>
          <Link to="/juegos" className='promo-button'>
            <div className='promo-icon'>🛒</div>
            <div>
              <h3>Comprá</h3>
              <p>Comprá y acumulá BNX Coins.</p>
            </div>
          </Link>
        </div>

        <div className='promo-item'>
          <div className='promo-button inactive'>
            <div className='promo-icon'>🎮</div>
            <div>
              <h3>Jugá <span className='new-badge'>¡Nuevo!</span></h3>
              <p>Andá a la sección Gamify y divertite.</p>
            </div>
          </div>
        </div>

        <div className='promo-item'>
          <div className='promo-button inactive'>
            <div className='promo-icon'>🎁</div>
            <div>
              <h3>Canjeá</h3>
              <p>Canjeá premios con tus coins.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🧩 Catálogo principal */}
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
      </div>
    </div>
  );
}

export default Home;

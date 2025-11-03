import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import { useState } from "react";
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
      title: 'Teclado Glorious GMMK3',
      description: 'Full Size RGB Switches FOX Black US',
      price: 421250,
      image: siImage,
      customClass: 'card-vertical',
    },
    {
      title: 'Mouse Glorious Model D',
      description: 'Wireless 2.4GHz Bluetooth 5.2 Matte White',
      price: 115850,
      image: siImage,
      customClass: 'card-vertical',
    },
    {
      title: 'Auriculares Corsair HS55',
      description: 'Surround Dolby Audio 7.1 PC/MAC/SWITCH/PS5',
      price: 89500,
      image: siImage,
      customClass: 'card-vertical',
    }
  ];

  return (
    <div className='home-container'>
      <h1>Catálogo Gamer</h1>

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
        <div className='product-grid'>
          {products.map((item, index) => (
            <ProductCard
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
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

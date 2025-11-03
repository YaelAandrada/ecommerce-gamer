import React from 'react';
import siImage from '../img/si.jpg';
import './ProductCard.css';

function ProductCard({ title, image, customClass }) {
  return (
    <div className={`product-card ${customClass}`}>
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <button className="buy-button">Ver más...</button>
      </div>
    </div>
  );
}
export default ProductCard;

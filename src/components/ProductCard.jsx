import React from 'react';
import siImage from '../img/si.jpg';
import './ProductCard.css';

function ProductCard({ title, image, customClass }) {
  return (
    <div className={`product-card ${customClass}`}>
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="card-overlay">
          <h3 className="card-title">{title}</h3>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;

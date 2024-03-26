import React, { useState } from 'react';

const ProductCard = ({ photo, price, availability, specifications }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`product-card ${isFlipped ? 'flipped' : ''}`}>
      <div className="front">
        <img src={photo} alt="Product" />
        <p>Price: {price}</p>
        <p>Availability: {availability}</p>
        <button onClick={handleClick}>Order</button>
        <div className="icon" onClick={handleClick}>
          Technical Specifications
        </div>
      </div>
      <div className="back">
        <h3>Technical Specifications</h3>
        <ul>
          {specifications.map((spec) => (
            <li key={spec.key}>
              {spec.key}: {spec.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;

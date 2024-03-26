import React, { useState } from 'react';
import './item.scss';

export const Item = ({
  poster,
  price,
  title,
  availability,
  specifications,
}) => {
  const avi = availability ? 'Доступно' : 'Не доступно';
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className={`item-container ${isFlipped ? 'flipped' : ''}`}>
      <div className="item-front">
        <img src={poster} alt={title}></img>
        <p className="item-par">{title}</p>
        <div className="item-span-container">
          <span className="item-span">{price}</span>
          {availability ? (
            <span className="item-span-green">{avi}</span>
          ) : (
            <span className="item-span-red">{avi}</span>
          )}
        </div>
        {availability ? (
          <button type="button" className="item-button">
            Забронювати
          </button>
        ) : (
          <button type="button" className="item-button" disabled>
            Забронювати
          </button>
        )}
        <button onClick={handleClick}>Order</button>
        <div className="product-icon" onClick={handleClick}>
          Technical Specifications
        </div>
      </div>

      <div className="item-back">
        <h3>Technical Specifications</h3>
        <ul>
          {specifications.map((spec) => (
            <li key={spec.key}>
              {spec.key}: {spec.value}
            </li>
          ))}
        </ul>
        <button onClick={handleClick}>Order</button>
        <div className="icon" onClick={handleClick}>
          Technical Specifications
        </div>
      </div>
    </div>
  );
};

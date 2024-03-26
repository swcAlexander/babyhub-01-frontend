import React from 'react';
import './item.scss';

export const Item = ({ poster, price, title, availability }) => {
  const avi = availability ? 'Доступно' : 'Не доступно';
  return (
    <div className="item-container">
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
    </div>
  );
};

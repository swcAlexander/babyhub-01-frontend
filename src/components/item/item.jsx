import { useState } from 'react';
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
  let key = 1;
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
        <div className="product-icon" onClick={handleClick}>
          Технічні характеристики
        </div>
      </div>

      <div className="item-back">
        <h3>Технічні характеристики</h3>
        <ul className='item-back-list'>
          {specifications.map((spec) => (
            <li key={key=key + 1}>
              {spec}
            </li>
          ))}
        </ul>
        <div className="product-icon" onClick={handleClick}>
          Картка продукту
        </div>
      </div>
    </div>
  );
};

import { useState, useEffect } from 'react';
import { fetchGallery } from '../../redux/news-service';
import { Item } from '../item/item.jsx';
import '../item/item.scss';

export const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchGallery()
      .then((items) => setItems(items))
      .catch((error) => console.error('Помилка:', error));
  }, []);

  return (
    <ul className="item-list">
      {items.map(({ _id, poster, title, price, availability }) => (
        <Item
          key={_id}
          id={_id}
          poster={poster}
          title={title}
          price={price}
          availability={availability}
        />
      ))}
    </ul>
  );
};

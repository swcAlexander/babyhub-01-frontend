import { useState, useEffect } from 'react';
import { fetchGallery } from '../../redux/news-service';
import { Item } from '../item/item.jsx';
import './list.scss';

export const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchGallery()
      .then((items) => setItems(items))
      .catch((error) => console.error('Помилка:', error));
  }, []);

  return (
    <section className='item-section container'>
          <ul className="item-list">
      {items.map(({ _id, poster, title, price, availability, specifications }) => (
        <Item
          key={_id}
          id={_id}
          poster={poster}
          title={title}
          price={price}
          availability={availability}
          specifications={specifications}
        />
      ))}
      </ul>
</section>

  );
};

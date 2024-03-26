import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Item } from './components/item/item';
import './App.css';

const props = {
  title: 'Вага GAMMA MD 6141',
  poster:
    'http://res.cloudinary.com/dmvl4lxnq/image/upload/v1710601915/items/jm9pvoi80y9ajt1zn8jr.jpg',
  price: '40 грн.',
  kind: 'ваги дитячі',
  availability: true,
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer noopener">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer noopener">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Item
        poster={props.poster}
        title={props.title}
        price={props.price}
        availability={props.availability}
      />
    </>
  );
}

export default App;

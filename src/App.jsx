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
  specifications: [
    'Діапазон вимірювання від 10 гр. до 20 кг',
    'Крок виміру - 5 гр',
    "Функція пам'яті останнього вимірювання з аналізом приросту",
    'Функція "Тара" - обнуління ваги пелюшки',
    '3 режими зважування: ваги для новонароджених / підлогові дитячі ваги / господарські знімна увігнута платформа',
    'Функція "борсається дитина" - визначення ваги навіть при ворушіння малюка',
    'Функція "Важок" - показує прибавку у вазі новонародженого',
    'Індикація перевантаження і розряду батарейок',
    'Перенастроювання індикації ваги в кг / фунтах / унціях',
    'Автоматичне відключення',
    'Техніка включення: Button-On (натискання на кнопку)',
    'Розміри піддона для новонароджених 52 х 30 х 6 см',
    'Рoзміри платформи 32 х 38 см',
    'Виробник Momert (Угорщина)',
  ],
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
        specifications={props.specifications}
      />
    </>
  );
}

export default App;

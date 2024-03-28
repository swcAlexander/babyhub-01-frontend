import { useEffect, useState } from 'react';
import './App.css';
import AddItemPage from './components/form/Form';
import { ItemList } from './components/list/List';
// import { getAll } from './redux/actions';
// import fetchGallery from './redux/news-service';

// const props = {
//   title: 'Вага GAMMA MD 6141',
//   poster:
//     'http://res.cloudinary.com/dmvl4lxnq/image/upload/v1710601915/items/jm9pvoi80y9ajt1zn8jr.jpg',
//   price: '40 грн.',
//   kind: 'ваги дитячі',
//   availability: true,
//   specifications: [
//     'Діапазон вимірювання від 10 гр. до 20 кг',
//     'Крок виміру - 5 гр',
//     "Функція пам'яті останнього вимірювання з аналізом приросту",
//     'Функція "Тара" - обнуління ваги пелюшки',
//     '3 режими зважування: ваги для новонароджених / підлогові дитячі ваги / господарські знімна увігнута платформа',
//     'Функція "борсається дитина" - визначення ваги навіть при ворушіння малюка',
//     'Функція "Важок" - показує прибавку у вазі новонародженого',
//     'Індикація перевантаження і розряду батарейок',
//     'Перенастроювання індикації ваги в кг / фунтах / унціях',
//     'Автоматичне відключення',
//     'Техніка включення: Button-On (натискання на кнопку)',
//     'Розміри піддона для новонароджених 52 х 30 х 6 см',
//     'Рoзміри платформи 32 х 38 см',
//     'Виробник Momert (Угорщина)',
//   ],
// };

function App() {
  const [buttonClass, setButtonClass] = useState('buttonForForm');
  const [formClass, setFormClass] = useState('form_hidden');
  const handleButtonClick = () => {
    if (buttonClass === 'buttonForForm') {
      setButtonClass('buttonForForm_hidden');
      setFormClass('form');
    } else {
      setButtonClass('buttonForForm');
      setFormClass('form_hidden');
    }
  };
  useEffect(() => {
    if (formClass === 'form_hidden') setButtonClass('buttonForForm');
  });

  return (
    <>
      <ItemList />
      <button type="button" className={buttonClass} onClick={handleButtonClick}>
        {buttonClass === 'buttonForForm' ? "Додати новий об'єкт" : 'Х'}
      </button>
      <AddItemPage formClass={formClass} />
    </>
  );
}

export default App;

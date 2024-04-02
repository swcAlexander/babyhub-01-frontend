/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import NewsApiService from '../../redux/news-service';
import './form.scss';

const AddItemPage = () => {
  const [poster, setPoster] = useState(null);
  const [title, setTitle] = useState('');
  const [kind, setKind] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState(false);
  const specifications = [];


  const [formClass, setFormClass] = useState('form_hidden');
  const handleButtonClick = () => {
    setFormClass('form_hidden');
  };

  const handleAddField = () => {
    specifications.push(document.getElementById('specsInput').value);
    document.getElementById('specsInput').value = '';
  };

  const handleFileChange = (e) => {
    setPoster(e.target.files[0]);
  };
  const handleAvailabilityChange = (e) => {
    setAvailability(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newsApiService = new NewsApiService();
    try {
      await newsApiService.postItem(
        title,
        price,
        poster,
        kind,
        availability,
        specifications
      );
    } catch (error) {
      console.error("Помилка при додаванні об'єкта:", error);
    }
  };
  let key=0;

  return (
    <div className={formClass}>
      <div className="modal">
        <button type="button" className="button-close" onClick={handleButtonClick}>
          <svg className="button-close__image" width="18" height="18">
            <use href=""></use>
          </svg>
        </button>
        <p className="modal__header">Залиште свої дані, ми вам передзвонимо</p>
        <form className="add-form" onSubmit={handleSubmit}>
          <h2>Додати об'єкт</h2>
          <label className="add-label">
            Фото:
            <input type="file" onChange={handleFileChange} accept="image/jpeg" />
          </label>
          <label className="add-label">
            Назва:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="add-label">
            Вид:
            {/* <input
              type="text"
              value={kind}
              onChange={(e) => setKind(e.target.value)}
            /> */}
            <select name="category" value={kind}
              onChange={(e) => setKind(e.target.value)}>
              <option value="Автокрісла">Автокрісла</option>
              <option value="Ваги дитячі" selected>Ваги дитячі</option>
              <option value="Ранній старт, горки">Ранній старт, горки</option>
              <option value="Коляски">Коляски</option>
              <option value="Молоковідсмоктувачі">Молоковідсмоктувачі</option>
              <option value="Мобільні ліжечка">Мобільні ліжечка</option>
              <option value="Дитячі ліжечка">Дитячі ліжечка</option>
              <option value="Медобладнання">Медобладнання</option>
              <option value="Лжечка-манежі">Лжечка-манежі</option>
              <option value="Качельки">Качельки</option>
              <option value="Коврики">Коврики</option>
              <option value="Стільчики">Стільчики</option>
              <option value="Стрибунці">Стрибунці</option>
              <option value="Бізіборди">Бізіборди</option>
              <option value="Рюкзаки">Рюкзаки</option>
              <option value="Ходунки">Ходунки</option>
              <option value="Відео радіоняні">Відео радіоняні</option>
              <option value="Меблі, івенти">Меблі, івенти</option>
            </select>
          </label>
          <label className="add-label">
            Ціна:
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <label className="label-checkbox add-label">
            <input
              className="imput-checkbox"
              type="checkbox"
              value={availability}
              checked={availability === true}
              onChange={handleAvailabilityChange}
            />
            <p className="par-checkbox"></p>
            {availability ? 'В наявності ' : 'Немає в наявності'}
          </label>
          <label className="add-label">
            Технічні характеристики:
            { 
              specifications.map((spec) => (
              <span key={key=key+1}>{spec}</span>
            ))}
            <input id="specsInput" type="text" />
            <button type="button" onClick={handleAddField}>
              Додати поле
            </button>
          </label>
          <button type="submit" onSubmit={handleSubmit}>
            Додати
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItemPage;

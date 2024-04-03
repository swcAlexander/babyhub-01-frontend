/* eslint-disable react/no-unescaped-entities */
import propTypes from "prop-types"
import { useState } from 'react';
import NewsApiService from '../../redux/news-service';
import './form.scss';

const AddItemPage = ({ showForm, onClose }) => {
  const [poster, setPoster] = useState(null);
  const [title, setTitle] = useState('');
  const [kind, setKind] = useState('');
  const [price, setPrice] = useState('');
  const [availability, setAvailability] = useState(false);
  const specifications = [];

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
    onClose();
  };
  let key = 0;

  return (
    <div className={showForm ? "form" : 'form_hidden'}>
      <div className="modal">
        <button type="button" className="button-close" onClick={onClose}>
          <svg className="button-close__image" width="18" height="18">
            <use href="./src/assets/svg/icons.svg#icon-close-black"></use>
          </svg>
        </button>
        <p className="modal__header">ДОДАТИ ОБ'ЄКТ</p>
        <form className="add-form" onSubmit={handleSubmit}>
          <label className="add-label">
            <span className="modal__text">Фото:</span>
            <input
              type="file"
              className="form-input"
              onChange={handleFileChange}
              accept="image/jpeg"
            />
          </label>
          <label className="add-label">
            <span className="modal__text">Назва:</span>
            <input
              type="text"
              className="form-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="add-label">
            <span className="modal__text">Вид:</span>
            <select
              className="form-input"
              name="category"
              value={kind}
              onChange={(e) => setKind(e.target.value)}>
              <option value="Автокрісла">Автокрісла</option>
              <option value="Ваги дитячі">Ваги дитячі</option>
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
            <span className="modal__text">Ціна:</span>
            <input
              className="form-input"
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
            <span className="modal__text">Технічні характеристики:</span>
            <input className="form-input" id="specsInput" type="text" />
            <button type="button" onClick={handleAddField}>
              Додати поле
            </button>
          </label>
          {specifications.map((spec) => (
            <span key={(key = key + 1)}>{spec}</span>
          ))}
          <button type="submit" onSubmit={handleSubmit}>
            Додати
          </button>
        </form>
      </div>
    </div>
  );
};

AddItemPage.propTypes = {
  showForm: propTypes.bool.isRequired,
  onClose: propTypes.func.isRequired
}

export default AddItemPage;

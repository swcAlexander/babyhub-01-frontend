import { useState } from 'react';
import NewsApiService from '../../redux/news-service';
import './form.scss';

const AddItemPage = ({ formClass }) => {
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
  };
  let key=0;

  return (
    <div className={formClass}>
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
          <input
            type="text"
            value={kind}
            onChange={(e) => setKind(e.target.value)}
          />
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
  );
};

export default AddItemPage;

import { useState } from 'react';
import NewsApiService from '../../redux/news-service';
import "./form.scss"

const AddItemPage = () => {
    const [poster, setPoster] = useState(null);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [availability, setAvailability] = useState('available');
    const [specifications, setSpecifications] = useState([]);

    const handleFileChange = (e) => {
        setPoster(e.target.files[0]);
    };
    const handleAvailabilityChange = (e) => {
    setAvailability(e.target.value);
};

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newsApiService = new NewsApiService();
        try {
            await newsApiService.postItem(poster, title, price, availability, specifications);
            // Опціонально: перенаправлення на іншу сторінку після успішного додавання
        } catch (error) {
            console.error('Помилка при додаванні об\'єкта:', error);
            // Опціонально: вивести повідомлення про помилку для користувача
        }
    };

    return (
        <div>
            <h1>Додати об'єкт</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Фото:
                    <input type="file" onChange={handleFileChange} accept="image/jpeg" />
                </label>
                <label>
                    Назва:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    Ціна:
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                </label>
                <label className='label-checkbox' >
                    <input className='imput-checkbox' type="radio" value="available" checked={availability === 'available'} onChange={handleAvailabilityChange} /> E ljcnegs
                    <input className='imput-checkbox' type="radio" value="not_available" checked={availability === 'not_available'} onChange={handleAvailabilityChange} /> Ytljcnegyj
                    <p className='par-checkbox' ></p> 
                </label>
                <label>
                    Технічні характеристики:
                    <textarea value={specifications.join('\n')} onChange={(e) => setSpecifications(e.target.value.split('\n'))} />
                </label>
                <button type="submit">Додати</button>
            </form>
        </div>
    );
};

export default AddItemPage;
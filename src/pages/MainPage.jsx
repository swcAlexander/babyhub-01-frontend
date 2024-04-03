import { ItemList } from '../components/list/List';
import AddItemPage from '../components/form/Form';
import { useState } from 'react';

export const MainPage = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <ItemList />
      <button className="buttonForForm" onClick={toggleForm}>
        Додати об'єкт
      </button>
       <AddItemPage showForm={showForm} onClose={() => setShowForm(false)} />
    </>
  );
};

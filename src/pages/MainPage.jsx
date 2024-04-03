
import { useToggle } from '../hooks/toggle';
import { ItemList } from '../components/list/List';
import AddItemPage from '../components/form/Form';


export const MainPage = () => {
  const {isOpen, open, close } = useToggle();



  return (
    <>
      <ItemList />
      <button className="buttonForForm" onClick={open}>
        Додати об'єкт
      </button>
       <AddItemPage showForm={isOpen} onClose={close} />
    </>
  );
};

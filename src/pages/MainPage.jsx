
import { ItemList } from "../components/list/List";
import AddItemPage from "../components/form/Form";


export const MainPage =()=> {

  return (
    <>
        <ItemList />
        <button className="buttonForForm" >
           Додати об'єкт   
        </button>
        <AddItemPage />
    </>
  );
}

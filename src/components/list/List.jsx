
import NewsApiService from "../../redux/news-service"
import { Item } from "../item/item";

export const ItemList = () => {
        async function getItems () {
        const gatAll = new NewsApiService();
        const result = await gatAll.fetchItems()
        console.log(result)
        return result;
  }
    // const gatAll = new NewsApiService();
    // const items = await gatAll.fetchItems()

    console.log("[f[f[f[f", items)
    
    return (
        <ul>
            {items.map(({_id, poster, title, price}) => {
                <Item id={_id} poster={poster}
                        title={title}
                        price={price}/>
            })}
        </ul>
    )




}

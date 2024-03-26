

import { Item } from "../item/item";

export const ItemList = (items) => {


    return (
        <ul>
            {items.map(({item}) => {
                <Item   poster={item.poster}
                        title={item.title}
                        price={item.price}
                        availability={item.availability}
                        specifications={item.specifications}/>
            })}
        </ul>
    )

}

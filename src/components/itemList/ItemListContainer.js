import ItemCountProduct from "../ItemCount/ItemCount"
import React from "react";

function ItemListContainer({items}) {
    return (
        <>
            <h1>{items}</h1>
            <ItemCountProduct initial={0} stock={20}/>
        </>
    )
}

export default ItemListContainer
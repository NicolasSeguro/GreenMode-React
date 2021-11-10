import React, {useEffect, useState} from "react";

import ItemList from "./ItemList";
import products from "../../db/items";
import { useParams } from "react-router";

//Llamada a la api de los items
const getItems = new Promise((res, rej) => {

    const condition = true;
    if (condition) {
        setTimeout(() => {
            res(products)
        }, 2000)
    } else {
        rej('404 Not found')
    }

})

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    
    const { id } = useParams();

   
    useEffect(() => {
        if (id) {
            getItems
                .then(res => setItems(res.filter(prod => prod.estado === id)))
                .catch(err => console.log(err))
        } else {
             getItems
                 .then(res => setItems(res))
                 .catch(err => console.log(err))
            
        }

       
    },[id] )

    return (
        <>
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer
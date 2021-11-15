import React, {useEffect, useState} from "react";

import ItemList from "./ItemList";
import products from "../../db/items";
import { useParams } from "react-router";

const ItemListContainer = () => {
    
    const [items, setItems] = useState([])
    
    const { categories } = useParams();

    //Llamada a la api de los items
    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(categories === undefined) {
                resolve(products)
            } else {
                resolve(products.filter(product => product.categories === categories))
            }
            
        }, 600)
    })
    
    useEffect(() => {
        getProduct.then(rta => setItems(rta))
    }, [categories])
    

    return (
        <>
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer
import React, { useEffect, useState } from 'react'

import ItemDetail from './ItemDetail';
import products from '../../db/items'
import { useParams } from 'react-router-dom';

const getItem = new Promise((res, rej) => {
    const condition = true;
    
    if (condition) {
        setTimeout(() => {
            res(products)
        }, 2000)
    } else {
        rej('404 Not found')
    }


})


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    const { id } = useParams()
    
    useEffect(() => {
        if (id) {
            getItem
                .then(res => setItem(res.find(element => element.id === id)))
                .catch(err => console.log(err))

        } else {
            getItem
                .then(res => setItem(res))
                .catch(err => console.log(err))

        }
            
    }, [id])    
    
    
    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer

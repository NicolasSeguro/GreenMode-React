import '../../styles/ItemCount.css';

import React, { useState } from "react";

import {Button} from 'react-bootstrap';

const ItemCountProduct = ({ stock, initial, onAdd }) => {
    const [countProduct, setCount] = useState(1)

    const addItem = () => {
        countProduct >= stock ? alert('La cantidad que seleccionaste es mayor al stock disponible') : setCount(countProduct + 1)
        
    }
    const removeItem = () => {
        countProduct >= initial ? setCount(countProduct - 1) : alert(`Sin stock`)
        
    }

    return (
        
        <>
            
            <div className="d-flex justify-content-center">
                <Button className="btn btn-secondary" onClick={removeItem}>-</Button>
                <h2 className="mx-2">{countProduct}</h2>
                <Button className="btn btn-light m-2" onClick={addItem}>+</Button>
            </div>
            <div>
                <Button className="btn btn-dark mt-3" onClick={() => onAdd()} disabled={countProduct < initial}>Agregar al carrito</Button>
            </div>
                    
        </>
    );
}

export default ItemCountProduct;
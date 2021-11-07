import '../../styles/ItemCount.css';

import React, { useState } from "react";

import {Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import product1 from '../../assets/products/product1.jpeg'

const ItemCountProduct = ({ stock, initial, onAdd, title }) => {
    const [countProduct, setCount] = useState(1)

    const addItem = () => {
        countProduct >= stock ? alert('La cantidad que seleccionaste es mayor al stock disponible') : setCount(countProduct + 1)
        
    }
    const removeItem = () => {
        countProduct >= initial ? setCount(countProduct - 1) : alert(`Sin stock`)
        
    }

    return (
        
        <>
            <Card className="w-25">
                <Card.Img variant="top" src={product1} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    Esta sudadera con capucha diseñada por Sia 
                    está confeccionada con un algodón de primera calidad que es 
                    súper suave por fuera y suave y velloso por dentro. 
                    Está hecho en un tono crema perfectamente monocromático
                    </Card.Text>
                    <Card.Text className="mb-3">Cantidad: {countProduct}</Card.Text>
                    <div className="d-flex justify-content-center">
                        <Button className="btn btn-secondary" onClick={removeItem}>-</Button>
                        <h2 className="mx-2">{countProduct}</h2>
                        <Button className="btn btn-light m-2" onClick={addItem}>+</Button>
                    </div>
                    <div>
                        <Button className="btn btn-dark mt-3" onClick={() => onAdd()} disabled={countProduct < initial}>Agregar al carrito</Button>
                    </div>
                    
                </Card.Body>
            </Card>
        </>
    );
}

export default ItemCountProduct;
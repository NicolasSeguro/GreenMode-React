import '../../styles/ItemCount.css';

import React, { useState } from "react";

import {Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import product1 from '../../assets/products/product1.jpeg'

const ItemCountProduct = ({stock, inicial}) => {
    const [cantidad, setCantidad] = useState(inicial)

    const addItem = () => {
        cantidad < stock ? setCantidad(cantidad + 1) : alert(`La cantidad que seleccionaste es mayor al stock disponible`)
    }
    const substractItem = () => {
        cantidad > inicial ? setCantidad(cantidad - 1) : console.log(`Sin stock`)
    }
    const onAdd = () => {
        if(cantidad >=1) alert(`Agregaste ${cantidad} productos`)
    }

    return (
        
        <>
        <div className="container">
            <Card className="w-25">
                <Card.Img variant="top" src={product1} />
                <Card.Body>
                    <Card.Title>Buzo</Card.Title>
                    <Card.Text>
                    Esta sudadera con capucha diseñada por Sia 
                    está confeccionada con un algodón de primera calidad que es 
                    súper suave por fuera y suave y velloso por dentro. 
                    Está hecho en un tono crema perfectamente monocromático
                    </Card.Text>
                    <Card.Text className="mb-3">Cantidad: {cantidad}</Card.Text>
                    <Button className="btn btn-light m-2" onClick={addItem}>+</Button>
                    <Button className="btn btn-secondary" onClick={substractItem}>-</Button>
                    <div>
                        <Button className="btn btn-dark mt-3" onClick={onAdd}>Agregar al carrito</Button>
                    </div>
                    
                </Card.Body>
            </Card>
            </div>
        </>
    );
}

export default ItemCountProduct;
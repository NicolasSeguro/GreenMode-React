import ItemCount from "../ItemCount/ItemCount"
import React from 'react'

const ItemDetail = ({ item, onAdd }) => {
    
    return (
        
        <div className="container d-flex justify-content-center" >
            <div className="card mt-2 mb-2 " style={{ width: "50%" }} >
                <h3 className="card-title m-2 text-center fs-3 text-dark">{item.title}  </h3>
                <img src={item.image} className="card-img-top container" style={{ width: "100%" }} alt="img" />
                <div className="card-body text-center">
                    <p className="text-center">{item.description}</p>
                    <p className="card-text text-dark"> {item.details}  </p>
                </div>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item text-dark fs-5">{item.stock} unidades en stock </li>
                    <li className="list-group-item text-dark fs-5">Precio: ${item.price} </li>
                </ul>
                   <ItemCount stock={item.stock} initial="1" title={item.title} onAdd={onAdd}/>
            </div>           
        </div>
    )
}

export default ItemDetail

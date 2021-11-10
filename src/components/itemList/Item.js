import { Link } from 'react-router-dom'
import React from 'react'

const Item = ({ id, title, price, image, description, details }) => {
    
    return (

        <div className="col-sm-12 col-md-6 col-lg-4" id={id}>           
                <div className="card mb-3">
                    <h4 className="card-header text-dark">{title} </h4>
                    <img src={image} className="card-img-top container mb-3 mt-2" style={{ width: "100%" }} alt="" />
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item text-dark">{ description }</li>
                        <li className="list-group-item text-dark">{ details} </li>
                        <li className="list-group-item text-dark">Precio: $ {price} </li>
                    </ul>
                <Link to={`/item/${id}`} type="button" className="btn btn-light text-dark">Ver más</Link>
                </div>
        </div>

    )
}

export default Item
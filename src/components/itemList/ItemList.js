import Item from './Item'
import React from 'react'

const ItemList = ({ items }) => {
    return (
        <div className="container mt-5" >
            <div className="row ">
                {items.map(item => 
                    <Item 
                        key={item.id} id={item.id} 
                        title={item.title} price={item.price} 
                        image={item.image} description={item.description} 
                        details={item.details}
                    />
                )}            
            </div>
        </div>
    )
}

export default ItemList
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {
    return (
        <div className="detail">
            <img src={product.image} alt={product.title} width="400" />
            <div>
                <h1>{product.title}</h1>
                <h2>{product.description}</h2>
                <h3>$ {product.price}</h3>
                <h4>Stock: {product.stock}</h4>
                <ItemCount stock={product.stock} initial={1} />
            </div>
        </div>
    );
};

export default ItemDetail;
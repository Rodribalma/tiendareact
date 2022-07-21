import React, { useState, useContext } from 'react';

import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {
    const [cantidad, setCantidad] = useState(0);
    const { addToCart } = useContext(CartContext);
    

    const onAdd = (cant) => {
        setCantidad(cant);
        addToCart(product, cant);
    };
    return (
        <div className="detail">
            <img src={product.image} alt={product.title} width="400" />
            <div>
                <h1>{product.title}</h1>
                <h2>{product.description}</h2>
                <h3>$ {product.price}</h3>
                <h4>Stock: {product.stock}</h4>
                {cantidad === 0 ? (
                    <ItemCount
                        stock={product.stock}
                        initial={1}
                        onAdd={onAdd}
                    />
                ) : (
                    <Link to="/cart">Ir al carrito</Link>
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
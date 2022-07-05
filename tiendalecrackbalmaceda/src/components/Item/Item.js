import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div
            style={{
                margin: '10px 20px',
                border: '2px solid black',
                width: '40%',
            }}
        >
            <img width="200px" src={item.image} alt="producto" />
            <h2>{item.title}</h2>
            <p>${item.price}</p>
            <Link to={`/detail/${item.id}`}>Ver detalle</Link>
        </div>
    );
};

export default Item;
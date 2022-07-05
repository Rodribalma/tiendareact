import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProd } from '../../mock/products';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const URL = `https://fakestoreapi.com/products/${id}`;
        fetch(URL)
            .then((res) => res.json())
            .then((json) => setProduct(json))
            .finally(() => {
                setLoading(false);
            });

    }, [id]);

    return (
        <div>
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <>
                    <ItemDetail product={product} />
                </>
            )}
        </div>
    );
};

export default ItemDetailContainer;
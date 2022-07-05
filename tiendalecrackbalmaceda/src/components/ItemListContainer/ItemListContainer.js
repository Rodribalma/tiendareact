import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProds } from '../../mock/products';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const categoryId = 'jewelery';
   
    useEffect(() => {
        setLoading(true);

        const URL = categoryId
            ? `https://fakestoreapi.com/products/category/${categoryId}`
            : 'https://fakestoreapi.com/products';

       

        fetch(URL)
            .then((res) => res.json())
            .then((json) => setProducts(json))
            .finally(() => {
                setLoading(false);
            });

    }, [categoryId]);

    return (
        <div>
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <>
                    <ItemList items={products} />
                </>
            )}
        </div>
    );
};

export default ItemListContainer;


import { useState, createContext } from 'react';

export const CartContext = createContext();
//const {Provider} = CartContext

const CartProvider = (props) => {
    //console.log(props);
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            sumarCantidad(item.id, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const sumarCantidad = (id, cantidad) => {
        const newCart = cart.map((prod) =>
            prod.id === id
                ? { ...prod, cantidad: prod.cantidad + cantidad }
                : prod
        );

        setCart(newCart);
    };

    const deleteItem = (id) => {
        const itemsFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(itemsFiltrados);
    };

    const calcularTotal = () => {
        return cart.reduce(
            (acum, actual) => acum + actual.price * actual.cantidad,
            0
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, deleteItem, calcularTotal }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
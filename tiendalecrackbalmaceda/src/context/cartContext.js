import { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const calcularCantidadDeProductos = () => {
    return cart.length > 0
      ? cart.reduce((acum, actual) => acum + actual.cantidad, 0)
      : "0";
  };

  const vaciarCarrito = () => setCart([]);

  const addToCart = (item) => {
    if (isInCart(item.id) !== 0) {
      sumarCantidad(item.id, item.cantidad);
    } else {
      setCart([...cart, item]);
    }
  };

  const isInCart = (id) => {
    const producto = cart.find((prod) => prod.id === id);
    return producto ? producto.cantidad : 0;
  };

  const sumarCantidad = (id, cantidad) => {
    const newCart = cart.map((prod) =>
      prod.id === id ? { ...prod, cantidad: prod.cantidad + cantidad } : prod
    );

    setCart(newCart);
  };

  const deleteItem = (id) => {
    const itemsFiltrados = cart.filter((prod) => prod.id !== id);
    setCart(itemsFiltrados);
  };

  const calcularTotal = () => {
    return cart.reduce(
      (acum, actual) => acum + actual.precio * actual.cantidad,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteItem,
        calcularTotal,
        isInCart,
        calcularCantidadDeProductos,
        vaciarCarrito,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

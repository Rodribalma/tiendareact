import React, { useState } from "react";
import "./item.css";

/*TODO: Agregar ruta de link*/

const Item = ({ producto,agregarCarrito}) => {
  const [cantidad, setCantidad] = useState(1);

  return (
    <div className="producto">
      <img width="200px" src={producto.imagen} alt="producto" />
      <h2>{producto.titulo}</h2>
      <p>${producto.precio}</p>
      {/*TODO: si no hay stock , no mostrar o mostrar "sin Stock"*/}
      
      <button onClick={() => setCantidad(cantidad === 1 ? 1 : cantidad - 1)}>
        -
      </button>
      {cantidad}
      {/*TODO: configurar para agregar el stock menos lo que hay en el carrito.*/}
      <button
        onClick={() =>
          setCantidad(cantidad === producto.stock ? cantidad : cantidad + 1)
        }
      >
        +
      </button>

      <button
      onClick={()=>
        agregarCarrito({...producto,cantidad})}
      >Agregar al Carrito</button>
    </div>
  );
};

export default Item;

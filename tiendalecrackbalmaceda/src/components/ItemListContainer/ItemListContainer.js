import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

const ItemListContainer = () => {
  const [productos, setProdcutos] = useState([]);

  useEffect(() => {
    fetch("../../../../mocks/productos.json")
      .then((res) => res.json())
      .then((data) => setProdcutos(data));
  }, []);
/*TODO: agregar TimeOut con demora de 2000 , usar una promesa nueva. Agregar cartel "loading" */
/*TODO: mover estilos a archivo CSS */
  return (
    <div
    style={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '80%',
        margin: '0 auto',
    }}
>
    {productos.map((item) =>(<Item key={item.id} producto={item}/>))}
</div>
  );
};

export default ItemListContainer;

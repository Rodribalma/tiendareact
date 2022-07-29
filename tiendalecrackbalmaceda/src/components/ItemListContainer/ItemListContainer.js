import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { useParams, useNavigate } from "react-router-dom";


const ItemListContainer = ({ agregarCarrito }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { idCategoria } = useParams();
  const navigate = useNavigate();

  const asyncMock = new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("../../../../mocks/productos.json")
        .then((res) => res.json())
        .then((data) => {
          const productos = idCategoria
            ? data.filter((item) => item.categoria === idCategoria)
            : data;
          if (productos.length !== 0) {
            resolve(productos);
          } else {
            reject();
          }
         }
        );
    }, 2000);
  });

  useEffect(() => {
    setCargando(true);
    asyncMock.then(
      (items) => {
        setProductos(items);
        setCargando(false);
      },
      () => navigate("/notfound")
    )
  }, [idCategoria]);

  /*TODO: mover estilos a archivo CSS (ARREGLAR) */
  return (
    <div className="item">
      {cargando
        ? "loading.."
        : productos.map((item) => (
            <Item
              agregarCarrito={agregarCarrito}
              key={item.id}
              producto={item}
            />
          ))}
    </div>
  );
};

export default ItemListContainer;

import React, { useEffect, useState } from "react";
import {
  getDocs,
  collection,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../ItemList/ItemList";

const ProductosRelacionados = ({ idCategoria, idProducto }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);
    const db = getFirestore();

    const collectionRef = collection(db, "Productos");
    const q = idCategoria
      ? query(collectionRef, where("categoria", "==", idCategoria))
      : query(collectionRef);

    getDocs(q).then((snapshot) => {
      if (snapshot.size > 0) {
        setProductos(
          snapshot.docs
            .filter((item) => item.id !== idProducto)
            .map((item) => ({
              id: item.id,
              ...item.data(),
            }))
        );
        setCargando(false);
      }
    });
  }, [idCategoria, idProducto]);

  return <ItemList productos={productos} cargando={cargando} />;
};

export default ProductosRelacionados;
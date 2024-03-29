import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getDocs,
  collection,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { idCategoria } = useParams();
  const navigate = useNavigate();

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
          snapshot.docs.map((item) => ({
            id: item.id,
            ...item.data(),
          }))
        );
        setCargando(false);
      } else {
        navigate("/notfound");
      }
    });
  }, [idCategoria, navigate]);

  return <ItemList productos={productos} cargando={cargando} />;
};

export default ItemListContainer;

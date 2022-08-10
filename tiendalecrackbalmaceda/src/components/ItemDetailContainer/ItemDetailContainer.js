import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { CircularProgress, Grid } from "@mui/material";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const navigate = useNavigate();
  const { idItem } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (!idItem) navigate("/notfound");

    setCargando(true);
    const db = getFirestore();
    const itemRef = doc(db, "Productos", idItem);

    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto({ id: snapshot.id, ...snapshot.data() });
        setCargando(false);
      } else {
        navigate("/notfound");
      }
    });
  }, [idItem, navigate]);

  return cargando ? (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <CircularProgress size={50} />
    </Grid>
  ) : (
    <ItemDetail producto={producto} />
  );
};

export default ItemDetailContainer;

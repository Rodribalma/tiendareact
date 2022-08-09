import React, { useEffect, useState } from "react";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import Item from "../Item/Item";
import { useParams, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { idCategoria } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setCargando(true);
    const db = getFirestore();
    const collectionRef = collection(db, "items");
    // TODO: FALTA APLICAR FILTRO DE CATEGORIA
    // USAR query y where... maybe limit con un steper...
    getDocs(collectionRef).then((snapshot) => {
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

  return (
    <Grid container spacing={2}>
      {cargando ? (
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
        productos.map((item) => (
          <Grid
            key={item.id}
            item
            xs={12}
            md={6}
            lg={4}
            xl={3}
            container
            justifyContent="center"
            alignItems="center"
          >
            <Item producto={item} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default ItemListContainer;

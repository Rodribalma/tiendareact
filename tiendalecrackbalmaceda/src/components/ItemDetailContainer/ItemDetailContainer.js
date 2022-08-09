import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  // TODO: REHACER ESTA PAGINA PARA CONSUMIR FIREBASE
  useEffect(() => {
    setLoading(true);
    const URL = `https://fakestoreapi.com/products/${id}`;
    fetch(URL)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <Box sx={{ m: "50%" }}>
          <CircularProgress size={80} />
        </Box>
      ) : (
        <>
          <ItemDetail product={product} />
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;

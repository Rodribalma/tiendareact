import React from "react";
import Item from "../Item/Item";
import { Grid, CircularProgress } from "@mui/material";

const ItemList = ({ productos, cargando }) => {
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

export default ItemList;

import React, { useState, useContext } from "react";
import { Grid, Typography, Button, Divider } from "@mui/material";
import { CartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import ProductosRelacionados from "../ProductosRelacionados/ProductosRelacionados";

const ItemDetail = ({ producto }) => {
  const { addToCart, isInCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const onAdd = () =>
    setCantidad(
      cantidad === producto.stock ||
        cantidad === producto.stock - isInCart(producto.id)
        ? cantidad
        : cantidad + 1
    );

  const onSub = () => setCantidad(cantidad === 1 ? 1 : cantidad - 1);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      item
      xs={12}
      md={12}
      spacing="30"
    >
      <Grid item xs={11} md={5} container justifyContent="center">
        <img
          src={producto.imagen}
          alt={producto.titulo}
          style={{ maxWidth: "98%" }}
        />
      </Grid>
      <Grid item xs={11} md={5}>
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom>
            {producto.titulo}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Stock: {producto.stock}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Precio: $ {producto.precio}
          </Typography>
        </Grid>

        {producto.stock === 0 ||
        producto.stock - isInCart(producto.id) === 0 ? (
          <Grid container justifyContent="center">
            <Typography variant="body1" gutterBottom>
              Sin Stock
            </Typography>
          </Grid>
        ) : (
          <Grid item xs={12} md={8} container>
            <Grid item xs={5} md={3}>
              <ItemCount cantidad={cantidad} onAdd={onAdd} onSub={onSub} />
            </Grid>
            <Grid item xs={7} md={5} align="center">
              <Button
                size="medium"
                color="primary"
                onClick={() => addToCart({ ...producto, cantidad })}
                variant="contained"
              >
                Agregar al Carrito
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid item xs={11} md={11}>
        <Divider />
      </Grid>
      <Grid item xs={11} md={11}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom align="center">
            Productos relacionados
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ProductosRelacionados
            idProducto={producto.id}
            idCategoria={producto.categoria}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;

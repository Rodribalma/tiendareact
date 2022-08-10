import React, { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { NavLink } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Typography,
} from "@mui/material";

const Item = ({ producto }) => {
  const { addToCart, isInCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  return (
    <Card sx={{ maxWidth: "95%", minWidth: "90%" }}>
      <NavLink to={`/item/${producto.id}`} style={{ textDecoration: "none" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={producto.imagen}
            alt={producto.titulo}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {producto.titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${producto.precio}
            </Typography>
          </CardContent>
        </CardActionArea>
      </NavLink>
      <CardActions>
        {producto.stock === 0 ||
        producto.stock - isInCart(producto.id) === 0 ? (
          <Grid container justifyContent="center">
            <Typography variant="body1" gutterBottom>
              Sin Stock
            </Typography>
          </Grid>
        ) : (
          <Grid
            container
            justifyContent="space-around"
            style={{ textDecoration: "none" }}
            spacing="5"
          >
            <Grid item xs={5}>
              <ItemCount
                cantidad={cantidad}
                onAdd={() =>
                  setCantidad(
                    cantidad === producto.stock ||
                      cantidad === producto.stock - isInCart(producto.id)
                      ? cantidad
                      : cantidad + 1
                  )
                }
                onSub={() => setCantidad(cantidad === 1 ? 1 : cantidad - 1)}
              />
            </Grid>
            <Grid item xs={7} align="center">
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
      </CardActions>
    </Card>
  );
};

export default Item;

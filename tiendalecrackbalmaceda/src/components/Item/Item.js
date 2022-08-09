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
    <Card sx={{ maxWidth: 345 }}>
          <NavLink to={`/item/${producto.id}`} style={{ textDecoration: "none" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={producto.imagen}
                alt="imagen producto"
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
              <>
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
                <Button
                  size="small"
                  color="primary"
                  onClick={() => addToCart({ ...producto, cantidad })}
                >
                  Agregar al Carrito
                </Button>
              </>
            )}
          </CardActions>
        </Card>
       );
     };

export default Item;

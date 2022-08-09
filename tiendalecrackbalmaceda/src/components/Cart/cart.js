import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import {
  Typography,
  Grid,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// TODO: AGREGAR COLECCION DE ORDENES EN LA BD
// {buyer: {name, phone, email}, items:{ ...},total }

const Cart = () => {
  const { cart, deleteItem, calcularTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Typography variant="h5" gutterBottom>
          Tu carrito esta vacío
        </Typography>
      </Grid>
    );
  }

  // TODO: AGREGAR BOTON DE PAGAR...QUE TE LLEVE AL CHECKOUT > y actualice el stock en firestore
  // TODO: MAYBE BOTON DE VACIAR CARRITO.. QUE BORRE TODO

  return (
    <List sx={{ width: "98%", bgcolor: "background.paper", m: 2 }} spacing={2}>
      {cart.map((prod) => (
        <div key={prod.id}>
          <ListItem
            alignItems="flex-start"
            key={prod.id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete button"
                onClick={() => deleteItem(prod.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar alt={prod.titulo} src={prod.imagen} />
            </ListItemAvatar>
            <ListItemText
              primary={prod.titulo}
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {/* TODO: VER COMO DIVIDIR EN DOS LINEAS O PRESENTAR MEJOR ESTA INFO */}
                  {`cantidad: ${prod.cantidad} - precio: ${prod.precio}
                            Total: ${prod.precio * prod.cantidad}`}
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
      <ListItem alignItems="flex-end" key="total">
        {/* TODO: MAKE mas grande, resaltado, maybe al medio o al final */}
        <ListItemText primary={`Total: $ ${calcularTotal()}`} />
      </ListItem>
    </List>
  );
};

export default Cart;

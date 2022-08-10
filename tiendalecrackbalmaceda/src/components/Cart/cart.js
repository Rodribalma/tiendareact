import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import {
  Button,
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

const Cart = () => {
  const { cart, deleteItem, calcularTotal, vaciarCarrito } =
    useContext(CartContext);

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

  return (
    <List sx={{ width: "98%", bgcolor: "background.paper", m: 2 }} spacing={2}>
      {cart.map((prod) => (
        <div key={prod.id}>
          <ListItem
            alignItems="flex-start"
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
                  {`cantidad: ${prod.cantidad} - precio: ${prod.precio}
                            Total: ${prod.precio * prod.cantidad}`}
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
      <ListItem alignItems="flex-start" key="total">
        <ListItemText primary={`Total: $ ${calcularTotal()}`} />
      </ListItem>
      <ListItem alignItems="center" key="finalizar">
        <NavLink to="/checkout" style={{ textDecoration: "none" }}>
          <Button
            sx={{ my: 2, display: "block" }}
            color="primary"
            variant="contained"
          >
            Finalizar
          </Button>
        </NavLink>
        <Button
          sx={{ my: 2, display: "block" }}
          variant="contained"
          onClick={vaciarCarrito}
        >
          Vaciar Carrito
        </Button>
      </ListItem>
    </List>
  );
};

export default Cart;

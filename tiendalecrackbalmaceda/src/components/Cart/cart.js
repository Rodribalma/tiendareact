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
    <List
      sx={{ maxWidth: "95%", bgcolor: "background.paper", m: 2 }}
      spacing={2}
    >
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
              <Avatar
                alt={prod.titulo}
                src={prod.imagen}
                sx={{ width: 56, height: 56 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={prod.titulo}
              sx={{ md: 5, ml: 5 }}
              primaryTypographyProps={{ variant: "h6" }}
              secondaryTypographyProps={{ variant: "body1" }}
              secondary={
                <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                  {`cantidad: ${prod.cantidad} - precio: $ ${prod.precio} 
                  Total: $ ${prod.precio * prod.cantidad}`}
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
        <Grid container direction="row" justifyContent="space-evenly">
          <Grid item xs={12} md={4} align="center">
            <Button
              sx={{ my: 2, display: "block" }}
              variant="outlined"
              onClick={vaciarCarrito}
            >
              Vaciar Carrito
            </Button>
          </Grid>
          <Grid item xs={12} md={4} align="center">
            <NavLink to="/checkout" style={{ textDecoration: "none" }}>
              <Button
                sx={{ my: 2, display: "block" }}
                color="primary"
                variant="contained"
              >
                Continuar
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </ListItem>
    </List>
  );
};

export default Cart;

import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import Badge from "@mui/material/Badge";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";

const CartWidget = () => {
  const { calcularCantidadDeProductos } = useContext(CartContext);

  return (
    <NavLink to="/cart" style={{ textDecoration: "none" }}>
      <IconButton aria-label="cart">
      <Badge badgeContent={calcularCantidadDeProductos()} color="secondary">
          <ShoppingCart color="string" />
        </Badge>
      </IconButton>
    </NavLink>
  );
};

export default CartWidget;

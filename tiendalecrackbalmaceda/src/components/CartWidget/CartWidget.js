import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import Badge from "@mui/material/Badge";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <NavLink to="/cart" style={{ textDecoration: "none" }}>
      <IconButton aria-label="cart">
        <Badge badgeContent={cart.length || "0"} color="primary">
          <ShoppingCart color="string" />
        </Badge>
      </IconButton>
    </NavLink>
  );
};

export default CartWidget;

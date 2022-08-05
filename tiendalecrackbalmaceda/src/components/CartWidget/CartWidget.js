import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import Badge from "@mui/material/Badge";
import { IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={cart.length || "0"} color="primary">
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
};

export default CartWidget;

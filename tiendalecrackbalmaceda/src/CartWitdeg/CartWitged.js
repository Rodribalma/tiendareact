import React from "react";
import shopping_cart from "../../assets/images/shopping-cart.png";

const CartWidget = () => {
  return (
    <div>
      <button className="cart-btn">
        <img src={shopping_cart} alt="Cart Icon" className="cart-widget" />
      </button>
      <div className="button">
        <span className="button__badge">0</span>
      </div>
    </div>
  );
};

export default CartWidget;
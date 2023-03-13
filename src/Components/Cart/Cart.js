import React, { useState } from "react";
import PropTypes from "prop-types";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import CartItem from "../CartItem/CartItem";

const Cart = ({ cartItems }) => {

    

    return (
    <div className="flex flex-col flex-1 mx-10  ">
      {cartItems.map((item) => (
        <CartItem item={item} />
      ))}
    </div>
  );
};

Cart.propTypes = {};

export default Cart;

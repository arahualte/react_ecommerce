import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router";
import "./Cart.css";

export const Cart = () => {
  let total = 0;
  const { cart, cleanCart } = useContext(CartContext);
  let hashMap = {};
  const navigate = useNavigate();

  cart.forEach((item) => {
    if (hashMap[item.props.id]) {
      hashMap[item.props.id].cant += item.amount;
    } else {
      hashMap[item.props.id] = { item: item.props, cant: item.amount };
    }
  });

  const cartProducts = Object.values(hashMap);

  const totalsPerProduct = cartProducts.map(
    (cartItem) => cartItem.cant * cartItem.item.price
  );

  if (totalsPerProduct.length > 0) {
    total = totalsPerProduct.reduce((acc, curr) => acc + curr);
  }
  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleClean = () => {
    cleanCart();
  };

  return (
    <div className="cart-content">
      {cartProducts.map((cartItem) => (
        <div key={cartItem.item.id}>
          <p>Articulo : {cartItem.item.title}</p>
          <p>Descripción : {cartItem.item.description}</p>
          <p>Precio : {cartItem.item.price}</p>
          <p>Cantidad : {cartItem.cant}</p>
          <hr />
        </div>
      ))}
      <p>
        <b>TOTAL: $ {total}</b>
      </p>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClean}
        style={{ margin: "10px" }}
      >
        Limpiar Carrito
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCheckout}
        style={{ margin: "10px" }}
      >
        Confirmar Carrito
      </Button>
    </div>
  );
};

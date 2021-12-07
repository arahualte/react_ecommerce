import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const Cart = () => {
  let total = 0;
  const { cart } = useContext(CartContext);
  let hashMap = {};

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

  return (
    <div>
      {cartProducts.map((cartItem) => (
        <div key={cartItem.item.id}>
          <p>TITLE : {cartItem.item.title}</p>
          <p>DESCRIPTION : {cartItem.item.description}</p>
          <p>PRICE : {cartItem.item.price}</p>
          <p>AMOUNT : {cartItem.cant}</p>
          <hr />
        </div>
      ))}
      <p>TOTAL: $ {total}</p>
      <Button variant="contained" color="secondary">
        Limpiar Carrito
      </Button>
      <Button variant="contained" color="primary">
        Confirmar Carrito
      </Button>
    </div>
  );
};

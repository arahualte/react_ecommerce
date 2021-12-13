import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import {
  Button,
  FormControl,
  TextField,
  Box,
  CircularProgress,
  Grid,
} from "@material-ui/core";

import { Timestamp, collection, addDoc } from "firebase/firestore/lite";
import { db } from "../Firebase/config";
import { CartContext } from "../Context/CartContext";
import "./CartCheckout.css";

export const CartCheckout = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const timer = useRef();
  let total = 0;
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

  const order = {
    buyer: { nombre: name, tel: tel, mail: mail },
    items: cartProducts,
    date: Timestamp.fromDate(new Date()),
    total: total,
  };

  const handleSubmit = () => {
    const orderRef = collection(db, "orders");
    if (!name || !tel || !mail) {
      alert("Missing fields");
    } else {
      if (!loading) {
        setLoading(true);
        timer.current = window.setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
      addDoc(orderRef, order).then((res) => {
        setOrderId(res.id);
      });
    }
  };

  useEffect(() => {
    if (orderId) {
      alert(`Order completed. Your order ID is: ${orderId}`);
      navigate("/products");
    }
  }, [orderId, navigate]);

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <Grid container direction="column">
      <FormControl style={{ margin: "20px" }}>
        <TextField
          id="outlined-name"
          label="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          id="outlined-name"
          label="Tel"
          value={tel}
          inputProps={{
            type: "number",
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
          onChange={(e) => {
            setTel(e.target.value);
          }}
        />
        <TextField
          id="outlined-name"
          label="Mail"
          value={mail}
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />
      </FormControl>
      <Box sx>
        <Button
          variant="contained"
          disabled={loading}
          onClick={handleSubmit}
          style={{ margin: "10px" }}
          color="primary"
        >
          Confirmar Compra
        </Button>
        {loading && <CircularProgress size={25} />}
      </Box>
    </Grid>
  );
};

import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { db } from "../Firebase/config";
import { collection, getDocs } from "firebase/firestore/lite";
import { ItemList } from "./ItemList";
import "./Item.css";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const itemRef = collection(db, "items");
    getDocs(itemRef).then((res) => {
      const products = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setProducts(products);
    });
  }, []);

  return (
    <div className="content">
      <h1>Productos</h1>
      <Grid item xs={2} sm={4} md={4} />
      <ItemList ItemList={products} />
    </div>
  );
};

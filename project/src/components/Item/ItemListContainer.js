import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { db } from "../Firebase/config";
import { collection, getDocs } from "firebase/firestore/lite";
import { ItemList } from "./ItemList";

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
    <Grid container direction="column">
      <h1>Productos</h1>
      <Grid item xs={false} sm={2} />
      <Grid item xs={12} sm={8}>
        <ItemList ItemList={products} />
      </Grid>
    </Grid>
  );
};

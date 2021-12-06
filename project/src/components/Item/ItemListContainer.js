import React, { useEffect, useState } from "react";
import { db } from "../Firebase/config";
import { collection, getDocs } from "firebase/firestore/lite";
import { ItemList } from "./ItemList";
import { Grid } from "@material-ui/core";

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
      <Grid item xs={false} sm={2} />
      <Grid item xs={12} sm={8}>
        <ItemList ItemList={products} />
      </Grid>
    </Grid>
  );
};

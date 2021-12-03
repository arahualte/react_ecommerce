import React, { useEffect, useState } from "react";
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
    <div>
      <ItemList ItemList={products} />
    </div>
  );
};

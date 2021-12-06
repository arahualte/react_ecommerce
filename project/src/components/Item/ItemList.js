import React from "react";
import Item from "./Item";

export const ItemList = ({ ItemList }) => {
  return (
    <div>
      {ItemList.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            imgUrl={product.imgUrl}
          />
        );
      })}
    </div>
  );
};

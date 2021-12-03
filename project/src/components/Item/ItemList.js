import React from "react";
import Item from "./Item";

export const ItemList = ({ ItemList }) => {
  return (
    <div>
      {ItemList.map((product) => {
        return (
          <Item
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

// useeffect --> vacio = render 1 vez
// id = render + de una 1 vez

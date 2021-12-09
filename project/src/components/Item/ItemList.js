import { Grid } from "@material-ui/core";
import React from "react";
import Item from "./Item";

export const ItemList = ({ ItemList }) => {
  return (
    <div>
      {ItemList.map((product) => {
        return (
          <Grid item sm={12}>
            <Item
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              imgUrl={product.imgUrl}
            />
          </Grid>
        );
      })}
    </div>
  );
};

import React from "react";
import { Grid } from "@material-ui/core";

export const Home = () => {
  return (
    <Grid container direction="column">
      <Grid item xs={false} sm={2} />
      <Grid item xs={12} sm={8}>
        <h1>Bienvenidos!</h1>
      </Grid>
    </Grid>
  );
};

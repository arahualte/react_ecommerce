import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { IconButton, CardMedia } from "@material-ui/core";
import ItemCount from "../ItemCount/ItemCount";

const Item = (props) => {
  const { title, description, price, imgUrl } = props;
  return (
    <Card>
      <CardHeader
        action={<IconButton aria-label="settings"></IconButton>}
        title={title}
        subheader={description}
      />
      <CardMedia style={{ height: "150px" }} image={imgUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
          ${price} ARS
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount />
        <Button variant="contained" size="medium">
          Agregar al Carrito
        </Button>
        <Button variant="contained" size="medium">
          Ver Mas
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;

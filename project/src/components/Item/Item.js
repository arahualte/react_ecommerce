import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import {
  IconButton,
  CardMedia,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Card,
} from "@material-ui/core";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Item = (props) => {
  const { id, title, description, price, imgUrl } = props;
  const { addProductToCart } = useContext(CartContext);

  const handleAdd = () => {
    addProductToCart(props);
  };

  return (
    <Card>
      <CardHeader
        action={<IconButton aria-label="settings"></IconButton>}
        title={title}
        subheader={description}
      />
      <CardMedia style={{ height: "250px" }} image={imgUrl} />
      <CardContent>
        <Typography variant="body2" component="p">
          ${price} ARS
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount />
        <Button variant="contained" size="medium" onClick={handleAdd}>
          Agregar al Carrito
        </Button>
        <Button variant="contained" size="medium">
          <Link to={`/products/${title}/${id}`}>Ver Mas</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;

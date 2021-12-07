import React, { useContext, useState } from "react";
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
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = (props) => {
  const { id, title, description, price, imgUrl } = props;
  const { addProductToCart } = useContext(CartContext);
  let [counter, setCounter] = useState(0);

  const handleAdd = () => {
    addProductToCart({ props, amount: counter });
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
      <ItemCount counter={counter} setCounter={setCounter} />
      <CardActions>
        <Button variant="contained" className="btn-main" onClick={handleAdd}>
          Agregar al Carrito
        </Button>
        <Button variant="contained" className="btn-detail">
          <Link to={`/products/${title}/${id}`}>Ver Mas</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;

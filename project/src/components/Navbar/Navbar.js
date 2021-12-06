import React, { useContext, useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Button,
  Box,
} from "@material-ui/core";
import { CartWidget } from "../CartWidget/CartWidget";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import "./Navbar.css";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [cartAmount, setCartAmount] = useState(0);
  const { totalItemsOnCart } = useContext(CartContext);
  const pages = [
    { component: "Home", url: "/" },
    { component: "Products", url: "/products" },
  ];

  useEffect(() => {
    setCartAmount(totalItemsOnCart);
  }, [totalItemsOnCart]);

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" className="nav-link">
          <Typography className={classes.typographyStyles}>
            E-COMMERCE
          </Typography>
        </Link>
        <Box sx={{ flexGrow: 1, display: "flex" }}>
          {pages.map((page) => (
            <Button
              className="btn-nav"
              key={page.url}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link to={`${page.url}`} className="nav-link">
                {page.component}
              </Link>
            </Button>
          ))}
        </Box>
        <IconButton>
          <Badge badgeContent={cartAmount} color="secondary">
            <CartWidget />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import React from "react";
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
import "./Header.css";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const pages = [
    { component: "Home", url: "/" },
    { component: "Products", url: "/products" },
  ];
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
          <Badge badgeContent={9} color="secondary">
            <CartWidget />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
} from "@material-ui/core";
import { CartWidget } from "../CartWidget/CartWidget";
import { makeStyles } from "@material-ui/styles";
import "./Header.css";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>E-commerce</Typography>
        <IconButton>
          <Badge badgeContent={4} color="secondary">
            <CartWidget />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

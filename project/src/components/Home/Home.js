import React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router";
import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();
  const handleView = () => {
    navigate("/products");
  };

  return (
    <div className="content">
      <h1>Bienvenidos!</h1>
      <p>
        Bienvenidos a la tienda comercial. Presione el siguiente boton para
        poder navegar y visualizar nuestros productos disponibles
      </p>
      <Button variant="contained" color="primary" onClick={handleView}>
        Ver Productos
      </Button>
    </div>
  );
};

import { Button } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

export const ItemDetail = () => {
  const { id, title } = useParams();

  // Lógica para mostrar el detalle (Busqueda y renderizado)

  const navigate = useNavigate();

  const Back = () => {
    navigate(-1);
  };

  return (
    <div>
      <p>Hola soy el detalle</p>
      <p>{id}</p>
      <p>{title}</p>
      <Button variant="contained" size="medium" onClick={Back}>
        Volver
      </Button>
    </div>
  );
};

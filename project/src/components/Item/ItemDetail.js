import { Button } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

export const ItemDetail = () => {
  const { id, title } = useParams();
  const navigate = useNavigate();

  const Back = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>short description</p>
      <p>{id}</p>
      <Button variant="contained" size="medium" onClick={Back}>
        Volver
      </Button>
    </div>
  );
};

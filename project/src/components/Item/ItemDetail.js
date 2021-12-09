import { Button } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

export const ItemDetail = () => {
  const { id, title, description } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="content">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{id}</p>
      <Button
        variant="contained"
        size="medium"
        color="primary"
        onClick={handleBack}
      >
        Volver
      </Button>
    </div>
  );
};

import { Button } from "@material-ui/core";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function ItemCount({ counter, setCounter }) {
  const stock = 10;

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h2> Cant: {counter} </h2>
      <Button
        variant="contained"
        color="secondary"
        onClick={decrement}
        disabled={counter === 0 ? true : false}
      >
        <FaMinus />
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={increment}
        disabled={counter === stock ? true : false}
      >
        <FaPlus />
      </Button>
    </div>
  );
}

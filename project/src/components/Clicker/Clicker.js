import React, { useState } from "react";

export const Clicker = (props) => {
  let [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div onClick={handleClick}>
      <h2> Clicks: {clicks} </h2>
    </div>
  );
};

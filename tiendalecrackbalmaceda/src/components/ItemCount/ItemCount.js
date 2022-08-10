import React from "react";
import { Button } from "@mui/material";

const ItemCount = ({ cantidad, onAdd, onSub }) => {
  return (
    <>
      <Button size="small" onClick={onSub}>
        -
      </Button>
      {cantidad}
      <Button size="small" onClick={onAdd}>
        {" "}
        +
      </Button>
    </>
  );
};

export default ItemCount;

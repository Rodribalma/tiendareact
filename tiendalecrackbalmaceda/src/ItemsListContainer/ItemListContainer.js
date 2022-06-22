import React from "react";

const ItemListContainer = ({greeting}) => {
  return (
    <div className="landing">
      <span>{greeting}</span>
    </div>
  );
};

export default ItemListContainer;
import React from "react";
import { Button } from "react-bootstrap";
import { AddItemButton } from "../AddItemButton";
import "./index.css";

export const ItemQuantitySelector = () => {

  const [quantity, setQuantity] = React.useState(1);

 
  const handleAddProduct = () => {
    setQuantity(quantity + 1);
  }

  const handleSubstractProduct = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const handleResetQuantity = () => {
    setQuantity(1);
  }

  return (
    <div>
      <Button className="boton" onClick={handleSubstractProduct}>-</Button>
      <input className="input" type="number" value={quantity} disabled/>
      <Button className="boton" onClick={handleAddProduct}>+</Button>
      <AddItemButton quantity={quantity} handleResetQuantity={handleResetQuantity}/>
    </div>
  );
};
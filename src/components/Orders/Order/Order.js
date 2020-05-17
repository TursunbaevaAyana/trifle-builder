import React from "react";
import classes from "./Order.module.css";

const CONTROLS = {
    banana : "Banana", 
    biscuit : "Biscuit", 
    redVelvet :  "Red-Velvet", 
    chocolateBiscuit : "Chocolate Biscuit", 
    strawberry : "Strawberry", 
    strawberryJam: "Strawberry Jam",
    iceCream : "Ice-Cream",
    kiwi : "Kiwi", 
    blueberries : "Blueberries",
};

export default ({ price, ingredients, details }) => {
  const ingredientsOutput = Object.keys(ingredients).map((key) => (
    <span key={key} className={classes.ingredient}>
      {CONTROLS[key]} ({ingredients[key]})
    </span>
  ));

  return (
    <div className={classes.Order}>
      <div className={classes.details}>
        {details.name}, {details.phone}, {details.address}
      </div>
      <div className={classes.price}>{price} som</div>
      <div className={classes.ingredients}>{ingredientsOutput}</div>
    </div>
  );
};
import React from "react";
import classes from "./Order.module.css";

const CONTROLS = {
  banana : "Banana", 
    biscuit : "Biscuit", 
    redVelvet :  "Red-Velvet", 
    chocolateBiscuit : "Chocolate Biscuit", 
    strawberry : "Strawberry", 
    iceCream : "Ice-Cream",
    blueberries : "Blueberries",
};

export default ({ price, ingredients, details }) => {
  let ingredientsOutput = null;
   if (ingredients) {
      ingredientsOutput = Object.keys(ingredients).map((key) => (
        <span key={key} className={classes.ingredient}>
          {CONTROLS[key]} ({ingredients[key]})
        </span>
      ));
   }

  const detailsOutput = (
    <div className={classes.details}>
      {details
        ? details.name + ", " + details.phone + ", " + details.address
        : "No details available"}
    </div>
  );

  return (
    <div className={classes.Order}>
      {detailsOutput}
      <div className={classes.price}>{price ? price.toFixed(2) : 0} som</div>
      <div className={classes.ingredients}>{ingredientsOutput}</div>
    </div>
  );
};
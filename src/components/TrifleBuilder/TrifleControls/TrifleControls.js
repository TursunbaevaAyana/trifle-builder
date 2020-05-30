import React from "react";
import classes from "./TrifleControls.module.css";
import TrifleControl from "./TrifleControl/TrifleControl"; 
import Button from "../../UI/Button/Button";

export default ({ canOrder, ingredients, startOrder }) => {
  const controlsOutput = Object.keys(ingredients).map((ingredient) => (
    <TrifleControl
      key={ingredient}
      ingredient={ingredient}
      label={ingredients[ingredient].label}
      disabled={ingredients[ingredient].quantity === 0}
    />
  ));

  return (
    <div className={classes.TrifleControls}>
      {controlsOutput}
      <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
  );
};
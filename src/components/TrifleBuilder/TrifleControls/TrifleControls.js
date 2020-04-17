import React from "react";
import classes from "./TrifleControls.module.css";
import TrifleControl from "./TrifleControl/TrifleControl"; 
import Button from "../../UI/Button/Button";

const CONTROLS = [
  { label: "Banana", type: "banana" },
  { label: "Biscuit", type: "biscuit" },
  { label: "Red-Velvet", type: "redVelvet" },
  { label: "Chocolate Biscuit", type: "chocolateBiscuit" },
  { label: "Strawberry", type: "strawberry" },
  { label: "Ice-Cream", type: "iceCream" },
  { label: "Kiwi", type: "kiwi" },
];

export default ({
  canOrder,
  ingredients,
  addIngredient,
  removeIngredient,
  startOrder,
}) => {
  const controlsOutput = CONTROLS.map((control) => (
    <TrifleControl
      key={control.type}
      control={control}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
      disabled={ingredients[control.type] === 0}
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
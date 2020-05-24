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
  { label: "Blueberries", type:  "blueberries" },
];

export default ({ canOrder, ingredients, startOrder }) => {
  const controlsOutput = CONTROLS.map((control) => (
    <TrifleControl
      key={control.type}
      control={control}
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
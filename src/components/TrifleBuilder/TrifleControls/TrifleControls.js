import React from "react";
import classes from "./TrifleControls.module.css";
import TrifleControl from "./TrifleControl/TrifleControl";

const CONTROLS = [
  { label: "Avocado Maki", type: "avocadoMaki" },
  { label: "Avocado Tuna Roll", type: "avocadoTunaRoll" },
  { label: "California Maki", type: "californiaMaki" },
  { label: "California Tuna Roll", type: "californiaTunaRoll" },
  { label: "Ikura Maki", type: "ikuraMaki" },
  { label: "Salmon Maki", type: "salmonMaki" },
];

export default ({ ingredients, addIngredient, removeIngredient }) => {
  const controlsOutput = CONTROLS.map((control) => (
    <TrifleControl
      key={control.type}
      control={control}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
      disabled={ingredients[control.type] === 0}
    />
  ));

  return <div className={classes.TrifleControls}>{controlsOutput}</div>;
};

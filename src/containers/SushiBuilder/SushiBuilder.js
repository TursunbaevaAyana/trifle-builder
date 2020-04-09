import React, { useState } from "react";
import SushiKit from "../../components/SushiBuilder/SushiKit/SushiKit";
import classes from "./SushiBuilder.module.css";
import SushiControls from "../../components/SushiBuilder/SushiControls/SushiControls";

export default () => {
  const [ingredients, setIngredients] = useState({
    salmonRoll: 3,
    tunaRoll: 12,
    maki: 5,
  });

  function addIngredient() {

  }

  return (
    <div className={classes.SushiBuilder}>
      <SushiKit ingredients={ingredients} />
      <SushiControls />
    </div>
  );
};

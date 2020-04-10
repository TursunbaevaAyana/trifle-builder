import React, { useState } from "react";
import SushiKit from "../../components/SushiBuilder/SushiKit/SushiKit";
import classes from "./SushiBuilder.module.css";
import SushiControls from "../../components/SushiBuilder/SushiControls/SushiControls";

const PRICES = {
  salmonRoll: 8,
  tunaRoll: 6,
  maki: 5,
};

export default () => {
  const [ingredients, setIngredients] = useState({
    salmonRoll: 0,
    tunaRoll: 0,
    maki: 0,
  });
  const [price, setPrice] = useState(100);

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }

  function removeIngredient(type) {
    if (ingredients[type] >= 1) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setIngredients(newIngredients);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }

  return (
    <div className={classes.SushiBuilder}>
      <SushiKit price={price} ingredients={ingredients} />
      <SushiControls
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </div>
  );
};

import React, { useState } from "react";
import TrifleKit from "../../components/TrifleBuilder/TrifleKit/TrifleKit";
import classes from "./TrifleBuilder.module.css";
import TrifleControls from "../../components/TrifleBuilder/TrifleControls/TrifleControls";

const PRICES = {
  banana: 2,
  biscuit: 10,
  redVelvet: 15,
  chocolateBiscuit: 12,
  strawberry: 3,
  iceCream: 7,
  kiwi: 2,
};

export default () => {
  const [ingredients, setIngredients] = useState({
    banana: 0,
    biscuit: 0,
    redVelvet: 0,
    chocolateBiscuit: 0,
    strawberry: 0,
    iceCream: 0,
    kiwi: 0,
  });
  const [price, setPrice] = useState(50);

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
    <div className={classes.TrifleBuilder}>
      <TrifleKit price={price} ingredients={ingredients} />
      <TrifleControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </div>
  );
};

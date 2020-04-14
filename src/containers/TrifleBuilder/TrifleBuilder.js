import React, { useState } from "react";
import TrifleKit from "../../components/TrifleBuilder/TrifleKit/TrifleKit";
import classes from "./TrifleBuilder.module.css";
import TrifleControls from "../../components/TrifleBuilder/TrifleControls/TrifleControls";

const PRICES = {
  avocadoMaki: 7,
  avocadoTunaRoll: 10,
  californiaMaki: 8,
  californiaTunaRoll: 11,
  ikuraMaki: 15,
  salmonMaki: 10,
};

export default () => {
  const [ingredients, setIngredients] = useState({
    avocadoMaki: 0,
    avocadoTunaRoll: 0,
    californiaMaki: 0,
    californiaTunaRoll: 0,
    ikuraMaki: 0,
    salmonMaki: 0,
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

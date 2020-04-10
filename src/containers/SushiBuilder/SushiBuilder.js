import React, { useState } from "react";
import SushiKit from "../../components/SushiBuilder/SushiKit/SushiKit";
import classes from "./SushiBuilder.module.css";
import SushiControls from "../../components/SushiBuilder/SushiControls/SushiControls";

const PRICES = {
  avocadoMaki: 7,
  avocadoTunaRoll: 10,
  californiaMaki: 8,
  californiaTunaRoll: 11,
  ikuraMaki: 15,
  salmonMaki: 12,
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
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </div>
  );
};

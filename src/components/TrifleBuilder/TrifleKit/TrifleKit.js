import React from "react";
import Trifle from "./Trifle/Trifle";
import classes from "./TrifleKit.module.css";

export default ({ price, ingredients }) => {
  let ingredientsOutput = [];

  Object.keys(ingredients).forEach((ingredient) => {
    for (let i = 0; i < ingredients[ingredient].quantity; i++) {
      ingredientsOutput.push(<Trifle key={ingredient + i} type={ingredient} />);
    }
  });

  return (
    <div className={classes.TrifleKit}>
      <div className={classes.bento}>
        <div className={classes.glassStart}></div>
        <div className={classes.glassMain}> {ingredientsOutput}</div>
        <div className={classes.glassEnd}></div>
      </div>
      <div className={classes.price}> {price} som</div>
    </div>
  );
};

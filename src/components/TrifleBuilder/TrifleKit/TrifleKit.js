import React from "react";
import Trifle from "./Trifle/Trifle";
import classes from "./TrifleKit.module.css";

export default ({ price, ingredients }) => {
  let ingredientsOutput = [];

  Object.keys(ingredients).forEach((type) => {
    for (let i = 0; i < ingredients[type]; i++) {
      ingredientsOutput.push(<Trifle key={type + i} type={type} />);
    }
  });

  return (
    <div className={classes.TrifelKit}>
      <div className={classes.bento}>{ingredientsOutput}</div>
      <div className={classes.price}>Total price: {price} som</div>
    </div>
  );
};

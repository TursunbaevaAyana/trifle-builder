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
    <div className={classes.TrifleKit}>
      <div className={classes.bento}>
        <div></div>
        <div> {ingredientsOutput}</div>
        <div></div>

      </div>
      <div className={classes.price}> {price} som</div>
    </div>
  );
};

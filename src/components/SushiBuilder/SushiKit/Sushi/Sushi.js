import React from 'react';
import classes from './Sushi.module.css';

export default ({ type }) => {
  const sushiClasses = [classes.Sushi];

  switch (type) {
    case 'salmon-roll':
      sushiClasses.push(classes.salmonRoll);
      break;

    case 'tuna-roll':
      sushiClasses.push(classes.tunaRoll);
      break;

    case 'maki':
    default:
      sushiClasses.push(classes.maki);
      break;
  }

  return (
    <div className={sushiClasses.join(' ')}>
    </div>
  );
};
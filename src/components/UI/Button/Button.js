import React from "react";
import classes from "./Button.module.css";

export default ({ children, click, enabled, red, orange }) => {
  const buttonClasses = [classes.Button];

  if (red) buttonClasses.push(classes.red);
  if (orange) buttonClasses.push(classes.orange);

  return (
    <button
      onClick={click}
      className={buttonClasses.join(' ')}
      disabled={enabled === undefined ? false : !enabled}
    >
      {children}
    </button>
  );
};
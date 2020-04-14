import React from "react";
import classes from "./Trifle.module.css";

export default ({ type }) => {
  const trifleClasses = [classes.Trifle, classes[type]];

  return <div className={trifleClasses.join(" ")}></div>;
};

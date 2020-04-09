import React from "react";
import classes from "./SushiControls.module.css";
import SushiControl from "./SushiControl/SushiControl";

export default () => {
  const controls = [
    { label: "Tuna Roll", type: "tunaRoll" },
    { label: "Salmon Roll", type: "salmonRoll" },
    { label: "Maki", type: "maki" },
  ];

  const controlsOutput = controls.map((control) => (
    <SushiControl label={control.label} />
  ));

  return (
    <div className={classes.SushiControls}>
      {controlsOutput}
    </div>
  );
};

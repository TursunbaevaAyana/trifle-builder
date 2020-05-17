import React from "react";
import TrifleKit from "../../TrifleBuilder/TrifleKit/TrifleKit";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";


export default ({ price, ingredients }) => {
    return(
      <div className={classes.CheckoutSummary}>
        <TrifleKit ingredients={ingredients} price={price}/>
        <Button green>Continue</Button>
        <Button green>Cancel</Button>
      </div>
    );
}
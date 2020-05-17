import React from "react";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import classes from "./Checkout.module.css";

export default () => {
    const ingredients = {};
    const price = {
        banana: 1,
        biscuit: 1,
        redVelvet: 1,
        chocolateBiscuit: 1,
        strawberry: 1,
        iceCream: 1,
        kiwi: 1,
        strawberryJam: 1,
        blueberries: 1,
    };

    return(
      <div className={classes.Checkout}>
        <CheckoutSummary ingredients={ingredients} price={price}/>
      </div>
    );
}
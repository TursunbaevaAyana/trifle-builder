import React, { useState } from "react";
  import TrifleKit from "../../components/TrifleBuilder/TrifleKit/TrifleKit";
  import classes from "./TrifleBuilder.module.css";
  import TrifleControls from "../../components/TrifleBuilder/TrifleControls/TrifleControls";
  import Modal from "../../components/UI/Modal/Modal";
  import OrderSummary from "../../components/TrifleBuilder/OrderSummary/OrderSummary";
  
  const PRICES = { 
    banana: 2,
    biscuit: 10,
    redVelvet: 15,
    chocolateBiscuit: 12,
    strawberry: 3,
    iceCream: 7,
    kiwi: 2,
    strawberryJam: 5,
    blueberries: 4,
  };
  
  export default () => {
    const [ingredients, setIngredients] = useState({
      banana: 0,
      biscuit: 0,
      redVelvet: 0,
      chocolateBiscuit: 0,
      strawberry: 0,
      iceCream: 0,
      kiwi: 0,
      strawberryJam: 0,
      blueberries: 0,
    });
    const [price, setPrice] = useState(50);
    const [canOrder, setCanOrder] = useState(false);
    const [isOrdering, setIsOrdering] = useState(false);
  
    function checkCanOrder(ingredients) {
      const total = Object.keys(ingredients).reduce((total, ingredient) => {
        return total + ingredients[ingredient];
      }, 0);
      setCanOrder(total > 0);
    }
  
    function startOrder() {
      setIsOrdering(true);
    }
  
    function cancelOrder() {
      setIsOrdering(false);
    }
  
    function finishOrder() {
      alert("You are on the checkout page!");
    }
  
    function addIngredient(type) {
      const newIngredients = { ...ingredients };
      newIngredients[type]++;
      setIngredients(newIngredients);
      checkCanOrder(newIngredients);
  
      const newPrice = price + PRICES[type];
      setPrice(newPrice);
    }
  
    function removeIngredient(type) {
      if (ingredients[type] >= 1) {
        const newIngredients = { ...ingredients };
        newIngredients[type]--;
        setIngredients(newIngredients);
        checkCanOrder(newIngredients);
  
        const newPrice = price - PRICES[type];
        setPrice(newPrice);
      }
    }
  
    return (
      <div className={classes.TrifleBuilder}>
        <TrifleKit price={price} ingredients={ingredients} />
        <TrifleControls
          startOrder={startOrder}
          canOrder={canOrder}
          ingredients={ingredients}
          addIngredient={addIngredient}
          removeIngredient={removeIngredient}
        />
        <Modal show={isOrdering} hideCallback={cancelOrder}>
          <OrderSummary
            ingredients={ingredients}
            finishOrder={finishOrder}
            cancelOrder={cancelOrder}
            price={price}
          />
        </Modal>
      </div>
    );
  };
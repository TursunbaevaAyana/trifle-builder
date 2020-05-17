import React, { useState, useEffect } from "react";
  import TrifleKit from "../../components/TrifleBuilder/TrifleKit/TrifleKit";
  import classes from "./TrifleBuilder.module.css";
  import TrifleControls from "../../components/TrifleBuilder/TrifleControls/TrifleControls";
  import Modal from "../../components/UI/Modal/Modal";
  import OrderSummary from "../../components/TrifleBuilder/OrderSummary/OrderSummary";
  import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
  
  const PRICES = { 
    banana: 2.1,
    biscuit: 10.4,
    redVelvet: 14.9,
    chocolateBiscuit: 12.7,
    strawberry: 3.2,
    iceCream: 7.6,
    kiwi: 2.3,
    strawberryJam: 5.9,
    blueberries: 4.9,
  };
  
  export default withErrorHandler(() => {
    const [ingredients, setIngredients] = useState(null);

    const [price, setPrice] = useState(50);
    const [canOrder, setCanOrder] = useState(false);
    const [isOrdering, setIsOrdering] = useState(false);
    const [loading, setLoading] = useState(false);


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
     const order = {
       ingredients: ingredients,
       price: price,
       delivery: 'Fast',
       customer: {
         name: "Bakyt",
         phone: "0556378797",
         address: {
           street: "245 Gebze",
           city: "Karakol",
         },
       },
     };

      setLoading(true);
      axios.post("/orders.json", order).then((response) =>  {
        setLoading(false);
        setIsOrdering(false);
      });
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

    useEffect(() =>{
      axios.get("/ingredients.json")
      .then(response => setIngredients(response.data));
    }, []);

    let output = <Spinner />;
    if (ingredients){
      output = (
        <>
         <TrifleKit price={price} ingredients={ingredients} />
         <TrifleControls
          startOrder={startOrder}
          canOrder={canOrder}
          ingredients={ingredients}
          addIngredient={addIngredient}
          removeIngredient={removeIngredient}
         />
        </>
      );
    }
  
    let orderSummary = <Spinner />;
    if (isOrdering && !loading) {
      orderSummary = (
        <OrderSummary
            ingredients={ingredients}
            finishOrder={finishOrder}
            cancelOrder={cancelOrder}
            price={price}
          />
      );
    }


    return (
      <div className={classes.TrifleBuilder}>
       {output}
        <Modal show={isOrdering} hideCallback={cancelOrder}> 
          {orderSummary}
        </Modal>
      </div>
    );
  }, axios);
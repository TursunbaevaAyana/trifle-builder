import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../axios";
import withAxios from "../../hoc/withAxios/withAxios";
import { load } from "../../store/actions/builder";
import TrifleKit from "../../components/TrifleBuilder/TrifleKit/TrifleKit";
import TrifleControls from "../../components/TrifleBuilder/TrifleControls/TrifleControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/TrifleBuilder/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./TrifleBuilder.module.css";

export default withAxios(() => {
  const { ingredients, price } = useSelector(state => state.builder);
  const isAuthenticated = useSelector(state => state.auth.token !== null);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    load(dispatch);
  }, [dispatch]);

  function startOrder() {
    if (isAuthenticated) {
      setIsOrdering(true);
    }
    else {
      history.push('/auth?checkout');
    }
  }

  let output = <Spinner />;
  if (ingredients) {
    const canOrder = Object.values(ingredients).reduce((canOrder, ingredient) => {
      return !canOrder ? ingredient.quantity > 0 : canOrder;
    }, false);

    output = (
      <>
        <TrifleKit price={price} ingredients={ingredients} />
        <TrifleControls
          startOrder={startOrder}
          canOrder={canOrder}
          ingredients={ingredients}
        />
        <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
          <OrderSummary
            ingredients={ingredients}
            finishOrder={() => history.push("/checkout")}
            cancelOrder={() => setIsOrdering(false)}
            price={price}
            />
        </Modal>
      </>
    );
  }

  return (
    <div className={classes.TrifleBuilder}>
      <h1>Trifle builder</h1>
      {output}
    </div>
  );
}, axios);
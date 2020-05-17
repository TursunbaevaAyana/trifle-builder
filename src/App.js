import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import TrifleBuilder from "./containers/TrifleBuilder/TrifleBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import "./App.css";

export default () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/builder" />
          </Route>
          <Route path="/builder">
            <TrifleBuilder />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};
  
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import TrifleBuilder from "./containers/TrifleBuilder/TrifleBuilder";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";
import Auth from "./components/Auth/Auth";
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
          <Route path="/auth">
            <Auth />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};
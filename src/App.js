import React from 'react';
import Layout from './containers/Layout/Layout';
import TrifleBuilder from './containers/TrifleBuilder/TrifleBuilder';
import Checkout from './containers/Checkout/Checkout';
import './App.css';


export default () => {
  return (
    <div className="App">
      <Layout>
        <TrifleBuilder />
        <Checkout />
      </Layout>
    </div>
  );
};

import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import TrifleBuilder from './containers/TrifleBuilder/TrifleBuilder';

export default () => {
  return (
    <div className="App">
      <Layout>
        <TrifleBuilder />
      </Layout>
    </div>
  );
};

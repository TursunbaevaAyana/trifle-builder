import React from 'react';
import Sushi from './Sushi/Sushi';
import classes from './SushiKit.module.css';

export default () => (
  <div className={classes.SushiKit}>
    <Sushi type="maki" />
    <Sushi type="salmon-roll" />
    <Sushi type="tuna-roll" />
    <Sushi type="tuna-roll" />
    <Sushi type="salmon-roll" />
    <Sushi type="tuna-roll" />
    <Sushi type="salmon-roll" />
    <Sushi type="tuna-roll" />
    <Sushi type="maki" />
    <Sushi type="tuna-roll" />
    <Sushi type="maki" />
    <Sushi type="tuna-roll" />
  </div>
);
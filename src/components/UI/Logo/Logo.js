import React from 'react';
import logo from '../../../assets/Logo.jpg';
import classes from './Logo.module.css';

export default () => (
  <div className={classes.Logo}>
    <img src={logo} alt="Trifle Builder logo" />
    <span>Trifle Builder</span>
  </div>
);
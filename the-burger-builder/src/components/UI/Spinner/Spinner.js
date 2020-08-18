import React from 'react';
import classes from './Spinner.css';
import Auxi from '../../../hoc/Auxi/Auxi';
const spinner = (props) => (
  <Auxi>
    <div className={classes.loader}>Loading...</div>
    <h1 style={{ textAlign: 'center' }}>Loading...</h1>
  </Auxi>
);
export default spinner;

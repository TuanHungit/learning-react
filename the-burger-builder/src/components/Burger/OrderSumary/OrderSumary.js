import React from 'react';
import Auxi from '../../../hoc/Auxi';
const orderSumary = (props) => {
  const orderDetails = Object.keys(props.ingredients).map((el) => (
    <li key={el}>
      <span style={{ textTransform: 'capitalize' }}>{el}:</span>{' '}
      {props.ingredients[el]}
    </li>
  ));
  return (
    <Auxi>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{orderDetails}</ul>
      <p>Countinue to Checkout?</p>
    </Auxi>
  );
};

export default orderSumary;

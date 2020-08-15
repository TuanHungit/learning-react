import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';
const control = [
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Meat', type: 'meat' },
  { label: 'Salad', type: 'salad' },
];
const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Total price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {control.map((el) => (
        <BuildControl
          key={el.label}
          label={el.label}
          added={() => props.ingredientsAdded(el.type)}
          removed={() => props.ingredientsRemoved(el.type)}
          disabledInfo={props.disabledInfo}
        />
      ))}
    </div>
  );
};

export default buildControls;

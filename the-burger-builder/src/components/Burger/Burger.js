import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BugerIngredient/BurgerIngredient';
import { array } from 'prop-types';
const burger = (props) => {
  let stranfromedIngredient = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((array, currentEl) => {
      return array.concat(currentEl);
    }, []);
  console.log(stranfromedIngredient);
  if (stranfromedIngredient.length === 0) {
    stranfromedIngredient = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {stranfromedIngredient}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;

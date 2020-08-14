import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from './../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      salad: 0,
      meat: 0,
      bacon: 0,
    },
    totalPrice: 4,
  };

  addIngredientHandler = (type) => {
    const oldcount = this.state.ingredients[type];
    const newCount = oldcount + 1;
    const updatedIngredient = { ...this.state.ingredients };
    updatedIngredient[type] = newCount;

    const oldTotalPrice = this.state.totalPrice;
    const newTotalPrice = oldTotalPrice + INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: newTotalPrice,
    });
  };
  render() {
    return (
      <Auxi>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientsAdded={this.addIngredientHandler} />
      </Auxi>
    );
  }
}
export default BurgerBuilder;

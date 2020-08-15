import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from './../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSumary from '../../components/Burger/OrderSumary/OrderSumary';
import Modal from '../../components/UI/Modal/Modal';
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
    purchasable: false,
    purchasing: false,
  };
  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((el) => ingredients[el])
      .reduce((sum, currentEl) => sum + currentEl, 0);
    this.setState({ purchasable: sum > 0 });
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
    this.updatePurchaseState(updatedIngredient);
  };
  removeIngredientHandler = (type) => {
    const oldcount = this.state.ingredients[type];
    if (oldcount <= 0) return;
    const newCount = oldcount - 1;
    const updatedIngredient = { ...this.state.ingredients };
    updatedIngredient[type] = newCount;

    const oldTotalPrice = this.state.totalPrice;
    const newTotalPrice = oldTotalPrice - INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredient,
      totalPrice: newTotalPrice,
    });
    this.updatePurchaseState(updatedIngredient);
  };
  updatePurchasingState = () => {
    this.setState({ purchasing: true });
  };
  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Auxi>
        <Modal show={this.state.purchasing}>
          <OrderSumary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientsAdded={this.addIngredientHandler}
          ingredientsRemoved={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
          ordered={this.updatePurchasingState}
        />
      </Auxi>
    );
  }
}
export default BurgerBuilder;

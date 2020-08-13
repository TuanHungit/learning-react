import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import Burger from './../../components/Burger/Burger';
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 1,
      salad: 2,
      meat: 2,
      bacon: 1,
    },
  };
  render() {
    return (
      <Auxi>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Auxi>
    );
  }
}
export default BurgerBuilder;

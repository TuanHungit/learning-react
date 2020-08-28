import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';
export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};
export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};
const setIngredients = (ings) => {
  return {
    type: actionTypes.SET_INGREDIENT,
    ingredients: ings,
  };
};
const fetchIngredientFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENT_FAILED,
  };
};
export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get('https://react-my-burger-22697.firebaseio.com/ingredients.json')
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientFailed());
      });
  };
};

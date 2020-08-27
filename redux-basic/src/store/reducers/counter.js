import * as actionTypes from '../actions/actionTypes';
const initialState = {
  counter: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actionTypes.SUB_COUNTER:
      return {
        ...state,
        counter: state.counter - action.value,
      };
  }
  return state;
};
export default reducer;

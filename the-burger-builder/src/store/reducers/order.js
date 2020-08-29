import * as actionTypes from '../actions/actionTypes';
const initialState = {
  orders: [],
  loadding: false,
  purchased: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return {
        ...state,
        purchased: false,
      };
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId,
      };
      return {
        ...state,
        loadding: false,
        purchased: true,
        orders: state.orders.concat(newOrder),
      };
    case actionTypes.PURCHASE_BURGER_FAILED:
      return {
        ...state,
        loadding: true,
        purchased: false,
      };
    case actionTypes.PURCHASE_BURGER_START:
      return {
        ...state,
        loadding: true,
      };
    case actionTypes.FETCH_ORDER_START:
      return {
        ...state,
        loadding: true,
      };
    case actionTypes.FETCH_ORDER_FAILED:
      return {
        ...state,
        loadding: true,
      };
    case actionTypes.FETCH_ORDER_SUCCESS:
      return {
        ...state,
        loadding: false,
        orders: action.orders,
      };
    default:
      return state;
  }
};
export default reducer;

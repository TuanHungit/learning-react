import * as actionTypes from '../actions/actionTypes';
const initialState = {
  token: null,
  userId: null,
  error: false,
  loadding: false,
};
const authStart = (state, action) => {
  return { ...state, loadding: true };
};
const authSuccess = (state, action) => {
  return {
    ...state,
    error: null,
    loadding: false,
    token: action.token,
    userId: action.userId,
  };
};
const authFailed = (state, action) => {
  return { ...state, error: action.error, loadding: false };
};
const authLogout = (state, action) => {
  return { ...state, userId: null, token: null };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAILED:
      return authFailed(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;

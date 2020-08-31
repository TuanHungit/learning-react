import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';
const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: authData.idToken,
    userId: authData.localId,
  };
};

const authFailed = (error) => {
  return {
    type: actionTypes.AUTH_FAILED,
    error: error,
  };
};

export const Logout = () => {
  return { type: actionTypes.AUTH_LOGOUT };
};
export const authLogout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(Logout());
    }, expirationTime * 1000);
  };
};
export const auth = (email, password, isSignUp) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    const webAPIKey = 'AIzaSyAryeWftkEApISY3rogj2XpAr6zzXhQ1C8';
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
    if (!isSignUp) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
    }
    axios
      .post(`${url}${webAPIKey}`, authData)
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data));
        dispatch(authLogout(response.data.expiresIn));
      })
      .catch((error) => {
        dispatch(authFailed(error.response.data.error));
      });
  };
};

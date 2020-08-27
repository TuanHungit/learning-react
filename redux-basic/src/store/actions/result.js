import * as actionTypes from './actionTypes';
export const storeResult = (result) => {
  return {
    type: actionTypes.STORE_RESULT,
    value: result,
  };
};
export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultId: id,
  };
};

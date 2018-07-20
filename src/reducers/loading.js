import { actionTypes as types } from "../constants";

const itemsIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.LOADING:
      return action.isLoading;
    default:
      return state;
  }
};

export default itemsIsLoading;

import { actionTypes as types } from "../constants";

const requestPage = (state = 1, action) => {
  switch (action.type) {
    case types.REQUEST_PAGE:
      return action.requestPage;
    default:
      return state;
  }
};

export default requestPage;

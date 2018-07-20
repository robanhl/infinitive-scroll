import { actionTypes as types } from "../constants";

const favourite = (state = [], action) => {
  switch (action.type) {
    case types.ADD_FAVOURITE:
      return [...state, action.favourite];
    default:
      return state;
  }
};

export default favourite;

import {actionTypes as types} from '../constants'

const shots = (state = [], action) => {
  switch (action.type) {
    case types.SUCCESS:
      return [...state.concat(action.data)]
    case types.FAILURE:
      return 'bad request'
    case types.SET_HOVER:
      return state.map(item => {
        if (item.id !== action.key) 
          return item;
        const hover = item.hover;
        return Object.assign({}, item, {hover: action.hover});
      });

    default:
      return state
  }
}

export default shots

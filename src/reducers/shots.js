import {actionTypes as types} from '../constants'

const shots = (state = [], action) => {
  switch (action.type) {
    case types.SUCCESS:
       return  [...state.concat(action.data)]              
    case types.FAILURE:
      return 'bad request'
    default:
      return state
  }
}

export default shots


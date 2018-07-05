import { actionTypes as types } from '../constants'

const scrolling = (state = true, action) => {
  switch (action.type) {
    case types.IS_SCROLLING:
      return action.scrolling
    default:
      return state
  }
}

export default scrolling

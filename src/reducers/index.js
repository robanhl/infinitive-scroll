import { combineReducers } from 'redux'

import shots from './shots'
import itemsIsLoading from './loading'
import requestPage from './requestPage'
import scrolling from './scrolling'

const rootReducer = combineReducers({
  shots,
  itemsIsLoading,
  requestPage,
  scrolling,
})

export default rootReducer

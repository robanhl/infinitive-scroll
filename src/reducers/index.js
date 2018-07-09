import { combineReducers } from 'redux'

import shots from './shots'
import itemsIsLoading from './loading'
import requestPage from './requestPage'
import scrolling from './scrolling'
import favourite from './favourite'

const rootReducer = combineReducers({
  shots,
  itemsIsLoading,
  requestPage,
  scrolling,
  favourite,
})

export default rootReducer

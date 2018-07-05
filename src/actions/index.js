import {actionTypes as types} from '../constants'
import {post} from '../helpers'

export const itemsAreLoading = bool => {
  return {type: types.LOADING, isLoading: bool}
}
export const isScrolling = bool => {
  return {type: types.IS_SCROLLING, scrolling: bool}
}
export const currentPage = number => {
  return {type: types.REQUEST_PAGE, requestPage: number}
}
export const load = page => dispatch => {
  dispatch({type: types.REQUEST})
  dispatch(itemsAreLoading(true))
  post({
    page: page,
    currentPage: currentPage(page),
    notLoading: itemsAreLoading(false),
    isScrolling: isScrolling(true),
    success: types.SUCCESS,
    failure: types.FAILURE,
    dispatch
  })
}

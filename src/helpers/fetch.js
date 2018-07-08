import $ from 'jquery'

const transformRes = (res) => {
  const transformedData = res
    .projects
    .reduce((total, item) => {
      const obj = {
        id: "id" + Math.random().toString(16).slice(2),
        name: item.name,
        image: item.covers[230],
        hover: false,
      }
      total.push(obj)
      return total
    }, [])
  return transformedData;
}

export const post = ({
  page,
  success,
  failure,
  currentPage,
  isScrolling,
  notLoading,
  dispatch
}) => {
  const API = 'https://behance.net/v2'
  const token = 'sYdP1Qd1b6aGKeo5UhqXwnEIO53MCH8U'
  const url = `${API}/projects/?per_page=15&page=${page}&api_key=${token}`
  $.ajax({url: url, type: 'get', dataType: 'jsonp'})
    .done(response => {
      dispatch(currentPage)
      const res = response
      const data = transformRes(res)
      dispatch({type: success, data})
      dispatch(notLoading)
      dispatch(isScrolling)
    })
    .fail(() => {
      dispatch({type: failure})
    })
}

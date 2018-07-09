import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { load, isScrolling, addFavourite } from '../../actions'
import { Flex, Box } from 'grid-styled'
import { Loader } from '../Styled'
import Item from './Item'

class List extends React.Component {

  componentWillMount() {
    this
      .props
      .load(this.props.currentPage)
    this.scrollListener = window.addEventListener('scroll', e => {
      this.handleScroll(e)
    })
  }
  handleScroll() {
    const {scrolling, load, currentPage, isScrolling} = this.props
    if (scrolling) {
      const lastLi = document.querySelector('div > div:last-child')
      const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
      const pageOffset = window.pageYOffset + window.innerHeight
      const bottomOffset = 20
      if (pageOffset > lastLiOffset - bottomOffset) {
        load(currentPage + 1)
        isScrolling(false)
      }
    }
  }
  render() {
    const {shots, loading, addFavourite} = this.props
    return (
      <div>
        <Flex flexWrap='wrap' alignItems='center' pt={4}>
          {shots.map((item, value) => {
            return <Item item={item} addFavourite={addFavourite} key={value}/>
          })}
        </Flex>
        {(loading && shots.length > 0)
          ? (
            <Flex justifyContent='center' alignItems='center'>
              <Box>
                <Loader></Loader>
              </Box>
            </Flex>
          )
          : null}
      </div>
    )
  }
}

List.propTypes = {
  shots: PropTypes
    .arrayOf(PropTypes.object)
    .isRequired,
  loading: PropTypes.bool.isRequired,
  load: PropTypes.func.isRequired,
  isScrolling: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  scrolling: PropTypes.bool.isRequired,
  addFavourite: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({shots: state.shots, loading: state.itemsIsLoading, currentPage: state.requestPage, scrolling: state.scrolling})
export default connect(mapStateToProps, {load, isScrolling, addFavourite})(List)

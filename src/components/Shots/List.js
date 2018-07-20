import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { load, isScrolling, addFavourite } from "../../actions";
import { Flex, Box } from "grid-styled";
import { Loader } from "../Styled";
import Item from "./Item";

class List extends React.PureComponent {
  constructor(props) {
    super(props);
    window.onscroll = () => {
      const { currentPage } = this.props;
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        this.props.load(currentPage + 1);
      }
    };
  }
  componentDidMount() {
    this.props.load(this.props.currentPage);
  }

  render() {
    const { shots, loading, addFavourite } = this.props;
    return (
      <div>
        <Flex flexWrap="wrap" alignItems="center" pt={4}>
          {shots.map((item, value) => {
            return <Item item={item} addFavourite={addFavourite} key={value} />;
          })}
        </Flex>
        {loading && shots.length > 0 ? (
          <Flex justifyContent="center" alignItems="center">
            <Box>
              <Loader />
            </Box>
          </Flex>
        ) : null}
      </div>
    );
  }
}

List.propTypes = {
  shots: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  load: PropTypes.func.isRequired,
  isScrolling: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  scrolling: PropTypes.bool.isRequired,
  addFavourite: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  shots: state.shots,
  loading: state.itemsIsLoading,
  currentPage: state.requestPage,
  scrolling: state.scrolling
});
export default connect(mapStateToProps, { load, isScrolling, addFavourite })(
  List
);

import { connect } from 'react-redux';

import Popular from './Popular';

const mapStateToProps = (state) => {
  return {
    mostPopular: state.mostPopular
  };
};

const PopularContainer = connect(
  mapStateToProps
)(Popular);

export default PopularContainer;

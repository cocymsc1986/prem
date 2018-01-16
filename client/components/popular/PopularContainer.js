import {connect} from 'react-redux';
import Popular from './Popular';

const mapStateToProps = state => {
  return {
    mostPopular: state.fantasyData.mostPopular,
    error: state.fantasyData.mainData.status.error
  };
};

const PopularContainer = connect(
  mapStateToProps
)(Popular);

export default PopularContainer;

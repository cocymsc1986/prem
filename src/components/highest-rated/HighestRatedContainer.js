import {connect} from 'react-redux';
import HighestRated from './HighestRated';

const mapStateToProps = state => {
  return {
    data: state.fantasyData.mainData.data,
    error: state.fantasyData.mainData.status.error
  };
};

const HighestRatedContainer = connect(
  mapStateToProps
)(HighestRated);

export default HighestRatedContainer;

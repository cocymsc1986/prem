import {connect} from 'react-redux';
import PlayerSearch from './PlayerSearch';

const mapStateToProps = state => {
  return {
    data: state.fantasyData.mainData.data,
    error: state.fantasyData.mainData.status.error
  };
};

const PlayerSearchContainer = connect(
  mapStateToProps
)(PlayerSearch);

export default PlayerSearchContainer;

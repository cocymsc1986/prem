import {connect} from 'react-redux';
import TeamSearch from './TeamSearch';

const mapStateToProps = state => {
  return {
    data: state.fantasyData.mainData.data,
    error: state.fantasyData.mainData.status.error
  };
};

const TeamSearchContainer = connect(
  mapStateToProps
)(TeamSearch);

export default TeamSearchContainer;

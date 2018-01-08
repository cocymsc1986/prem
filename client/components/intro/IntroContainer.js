import {connect} from 'react-redux';
import Intro from './Intro';

const mapStateToProps = state => {
  return {
    data: state.fantasyData.mainData.data,
    error: state.fantasyData.mainData.status.error
  };
};

const IntroContainer = connect(
  mapStateToProps
)(Intro);

export default IntroContainer;

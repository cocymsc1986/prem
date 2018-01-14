import {connect} from 'react-redux';
import Home from './Home';
import {getData} from '../../redux/actions/actions';

export const mapDispatchToProps = dispatch => {
  return {
    getData: () => {
      dispatch(getData());
    }
  };
};

const HomeContainer = connect(
	null,
  mapDispatchToProps
)(Home);

export default HomeContainer;

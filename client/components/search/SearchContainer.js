import {connect} from 'react-redux';
import Search from './Search';
import {goToUrl} from '../../redux/actions/actions';

const mapStateToProps = state => {
  return {
    data: state.fantasyData.mainData.data
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    submitSearch: path => {
      dispatch(goToUrl(path));
    }
  };
};

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;

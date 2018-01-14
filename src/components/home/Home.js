import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Intro from '../intro';
import PopularContainer from '../popular';
import SearchContainer from '../search';
import HighestRatedRow from '../highest-rated';

class Home extends Component {
  componentDidMount() {
		this.props.getData();
  }

  render() {
    return (
      <div>
        <Intro />
        <PopularContainer />
        <SearchContainer />
        <HighestRatedRow />
      </div>
    );
  }
}

Home.propTypes = {
	getData: PropTypes.func
};

export default Home;

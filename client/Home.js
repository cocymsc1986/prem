import React, {Component} from 'react';
import Intro from './components/Intro';
import PopularContainer from './components/popular/PopularContainer';
import SearchContainer from './components/search/SearchContainer';
import HighestRatedRow from './components/highest-rated/HighestRatedRow';

class Home extends Component {
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

export default Home;

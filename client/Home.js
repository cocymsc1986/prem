import React, {Component} from 'react';
import Intro from './components/Intro';
import PopularContainer from './components/popular/PopularContainer';
import SearchContainer from './components/search/SearchContainer';

class Home extends Component {
  render() {
    return (
      <div>
        <Intro />
        <PopularContainer />
        <SearchContainer />
      </div>
    );
  }
}

export default Home;

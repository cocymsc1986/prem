/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Home from '../client/Home';
import Intro from '../client/components/Intro';
import PopularContainer from '../client/components/popular/PopularContainer';
import SearchContainer from '../client/components/search/SearchContainer';

describe('Home component', function () {
  it('contains <Intro /> component', function () {
    const app = shallow(<Home />);
    expect(app.find(Intro)).to.have.length(1);
  });

  it('contains <PopularContainer /> component', function () {
    const app = shallow(<Home />);
    expect(app.find(PopularContainer)).to.have.length(1);
	});

	it('contains <SearchContainer /> component', function () {
    const app = shallow(<Home />);
    expect(app.find(SearchContainer)).to.have.length(1);
  });
});

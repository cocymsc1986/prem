/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Home from '../client/Home';
import IntroContainer from '../client/components/intro/IntroContainer';
import PopularContainer from '../client/components/popular/PopularContainer';
import SearchContainer from '../client/components/search/SearchContainer';

describe('Home component', function () {
  it('contains <IntroContainer /> component', function () {
    const app = shallow(<Home />);
    expect(app.find(IntroContainer)).to.have.length(1);
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

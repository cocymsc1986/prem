
import React from 'react';
import { expect, assert } from 'chai';
import { mount, shallow } from 'enzyme';

import App from '../client/App';
import Header from '../client/components/Header';
import Intro from '../client/components/Intro';
import PopularContainer from '../client/components/popular/PopularContainer';

describe('App component', function() {
  
  it("contains <Header /> component", function() {
    const app = shallow(<App />)
    expect(app.find(Header)).to.have.length(1);
  });

  it("contains <Intro /> component", function() {
    const app = shallow(<App />)
    expect(app.find(Intro)).to.have.length(1);
  });

  it("contains <PopularContainer /> component", function() {
    const app = shallow(<App />)
    expect(app.find(PopularContainer)).to.have.length(1);
  });

});

/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../client/App';
import Header from '../client/components/Header';
import Routes from '../client/Routes';

describe('App component', function () {
  it('contains <Header /> component', function () {
    const app = shallow(<App />);
    expect(app.find(Header)).to.have.length(1);
  });

  it('contains <Routes /> component', function () {
    const app = shallow(<App />);
    expect(app.find(Routes)).to.have.length(1);
  });
});

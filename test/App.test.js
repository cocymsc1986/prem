
import React from 'react';
import { expect, assert } from 'chai';
import { mount, shallow } from 'enzyme';

import App from '../client/App';
import Header from '../client/components/Header';

describe('App component', function() {
  
  it("contains <Header /> component", function() {
    const app = shallow(<App />)
    expect(app.find(Header)).to.have.length(1);
  });

});
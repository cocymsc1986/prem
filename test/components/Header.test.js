
import React from 'react';
import { expect, assert } from 'chai';
import { mount, shallow } from 'enzyme';

import Header from '../../client/components/Header';

describe('Header component', function() {
  
  it("contains <h1 /> element", function() {
    const app = shallow(<Header />)
    expect(app.find('h1')).to.have.length(1);
  });
});
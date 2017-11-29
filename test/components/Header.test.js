
/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from '../../client/components/Header';

describe('Header component', function () {
  it('contains <h1 /> element', function () {
    const app = shallow(<Header />);
    expect(app.find('h1')).to.have.length(1);
  });
});

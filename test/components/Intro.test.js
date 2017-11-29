
/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Intro from '../../client/components/Intro';

describe('Header component', function () {
  it('contains <h1 /> element', function () {
    const app = shallow(<Intro />);
    expect(app.find('p')).to.have.length(1);
  });
});

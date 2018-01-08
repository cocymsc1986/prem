/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Footer from '../../client/components/Footer';

describe('Header component', function () {
	const app = shallow(<Footer />);

  it('contains <footer> element', function () {
    expect(app.find('footer')).to.have.length(1);
	});

	it('contains <a> element', function () {
    expect(app.find('a')).to.have.length(1);
	});

	it('contains <p> element', function () {
    expect(app.find('p')).to.have.length(1);
  });
});


/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Intro from '../../client/components/intro/Intro';
import Loader from '../../client/components/Loader';

describe('Intro component', function () {
  const data = {
    'current-event': 0,
    events: [
      {
        deadline_time_formatted: '11 Aug 18:45'
      }
    ]
  };

  const error = {
    error: 'test'
  };

  context('With error', () => {
    it('should render dataless p', function () {
      const app = shallow(<Intro error={error} data={data} />);
      expect(app.find('[data-test="dataless"]')).to.have.length(1);
    });
  });

  context('Without data', () => {
    it('should render <Loader> component', function () {
      const app = shallow(<Intro />);
      expect(app.find(Loader)).to.have.length(1);
    });
  });

  context('With data', () => {
    it('should render <p> element', function () {
      const app = shallow(<Intro data={data} />);
      expect(app.find('p')).to.have.length(1);
    });
  });
});

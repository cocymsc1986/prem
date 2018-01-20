/* eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Popular from '../../../client/components/popular/Popular';
import Loader from '../../../client/components/Loader';

describe('Popular component', function () {
  context('On render', function () {
    let component;
    beforeEach(() => {
      const mostPopular = {
        points: {
          web_name: 'test_name'
        },
        transferred_in: {
          web_name: 'test_name2'
        }
      };
      component = shallow(<Popular mostPopular={mostPopular}/>);
    });

    it('should render correctly', function () {
      expect(component).to.have.length(1);
    });
  });

  context('on load, while fetching data in props', function () {
    let component;
    beforeEach(() => {
      const mostPopular = null;
      component = shallow(<Popular mostPopular={mostPopular}/>);
    });

    it('should render loading', function () {
      expect(component.find(Loader)).to.have.length(1);
    });
  });

  context('when data loaded', function () {
    let component;
    beforeEach(() => {
      const mostPopular = {
        selected_by_percent: {
          web_name: 'test_name',
          selected_by_percent: '99'
        },
        total_points: {
          web_name: 'test_name2',
          total_points: '50'
        }
      };
      component = shallow(<Popular mostPopular={mostPopular}/>);
    });

    it('should not render loading', function () {
      expect(component.find(Loader)).to.have.length(0);
    });

    it('should render mostPopular data with correct labels and values', function () {
      expect(component.find('p').at(0).text()).to.equal('Most Selected');
      expect(component.find('p').at(1).text()).to.equal('Highest Total Points This Season');
      expect(component.find('h2').at(1).text()).to.equal('test_name - 99%');
      expect(component.find('h2').at(2).text()).to.equal('test_name2 - 50');
    });
  });
});

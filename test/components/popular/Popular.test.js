
import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';

import Popular from '../../../client/components/popular/Popular';

describe('Popular component', function() {
  context('On render', function() {
    let component;
    beforeEach(() => {
      const mostPopular = {
        points: {
          web_name: 'test_name'
        },
        transferred_in: {
          web_name: 'test_name2'
        }
      }
      component = shallow(<Popular mostPopular={mostPopular}/>, )
    })
    
    it("should render correctly", function() {
      expect(component).to.exist;
    });
  });

  context('on load, while fetching data in props', function() {
    let component;
    beforeEach(() => {
      const mostPopular = null;
      component = shallow(<Popular mostPopular={mostPopular}/>)
    })
    
    it("should render loading", function() {
      expect(component.find('.loader')).to.have.length(1);
    });
  });

  context('when data loaded', function() {
    let component;
    beforeEach(() => {
      const mostPopular = {
        points: {
          web_name: 'test_name'
        },
        transferred_in: {
          web_name: 'test_name2'
        }
      }
      component = shallow(<Popular mostPopular={mostPopular}/>)
    })
    
    it("should not render loading", function() {
      expect(component.find('.loader')).to.have.length(0);
    });

    it("should render mostPopular data", function() {
      expect(component.find('h2').at(0).text()).to.equal('test_name')
      expect(component.find('h2').at(1).text()).to.equal('test_name2')
    });
  });
})

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';

import Search from '../../../client/components/search/Search';
import Loader from '../../../client/components/Loader';
import TypeaheadModule from 'react-typeahead';
const Typeahead = TypeaheadModule.Typeahead;

describe('Search component', function () {
  context('On render', function () {
    context('Without data', function () {
      const component = shallow(<Search />);

      it('should render loading', function () {
        expect(component.find(Loader)).to.have.length(1);
      });
    });

    context('With data', function () {
      let component;
      beforeEach(() => {
        const data = {
          elements: [
            '0': {
              first_name: 'Adam',
              second_name: 'Lallana'
            },
            '1': {
              first_name: 'Wayne',
              second_name: 'Rooney'
            },
            '2': {
              first_name: 'Theo',
              second_name: 'Walcott'
            },
            '3': {
              first_name: 'Gary',
              second_name: 'Cahill'
            }
          ]
        };
        component = shallow(<Search data={data}/>);
      });

      it('should render search input', function () {
        expect(component.find(Typeahead)).to.have.length(1);
      });
    });
  });

  context.only('Search input', function () {
    context('On selecting autocomplete option', function () {
      let component;
      beforeEach(() => {
        const data = {
          elements: [
            '0': {
              first_name: 'Adam',
              second_name: 'Lallana'
            },
            '1': {
              first_name: 'Wayne',
              second_name: 'Rooney'
            },
            '2': {
              first_name: 'Theo',
              second_name: 'Walcott'
            },
            '3': {
              first_name: 'Gary',
              second_name: 'Cahill'
            }
          ]
        };
        component = shallow(<Search data={data}/>);
      });

      console.log(component);

      it('should fire submitSearch function', function () {
        
      });

    });
  });

  context('On submit', function () {

    // should fire submit action

    // should re direct
    
  });
});

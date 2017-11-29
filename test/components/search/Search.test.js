/* eslint-env mocha */
import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';

const { expect } = chai;
chai.use(sinonChai);

import Search from '../../../client/components/search/Search';
import Loader from '../../../client/components/Loader';
import TypeaheadModule from 'react-typeahead';
const Typeahead = TypeaheadModule.Typeahead;

describe('Search component', function () {
  const submitSearch = spy();
  context('On render', function () {
    context('Without data', function () {
      const component = shallow(<Search submitSearch={submitSearch} />);

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
        component = shallow(<Search data={data} submitSearch={submitSearch} />);
      });

      it('should render search input', function () {
        expect(component.find(Typeahead)).to.have.length(1);
      });
    });
  });

  context('Search input', function () {
    context('On submit', function () {
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
        component = shallow(<Search data={data} submitSearch={submitSearch}/>);
      });

      it('should fire submitSearch with player/ and selected player', function () {
        const instance = component.instance();
        instance.onSubmitSearch('Adam Lallana');
        expect(submitSearch.calledWith('player/Adam Lallana'));
      });
    });
  });
});

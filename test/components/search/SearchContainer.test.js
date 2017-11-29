/* eslint-env mocha */
import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import chai from 'chai';
import {spy} from 'sinon';
import sinonChai from 'sinon-chai';
import SearchContainer, {mapDispatchToProps} from '../../../client/components/search/SearchContainer';
import configureStore from 'redux-mock-store';

const {expect} = chai;
chai.use(sinonChai);

describe('SearchContainer connected component', () => {
	const initialState = { fantasyData: { mainData: { data: { elements: [
		0: { first_name: 'testData', second_name: 'testData2' },
		1: { first_name: 'testData', second_name: 'testData2' }
	]}}}};
	const mockStore = configureStore();

	let store, wrapper;

	beforeEach(() => {
		store = mockStore(initialState);
		wrapper = mount(<Provider store={store}><SearchContainer /></Provider>);
	});

	it('should render the connected component', () => {
		expect(wrapper.find(SearchContainer).length).to.equal(1);
	});

	it('submitSearch should dispatch GO_TO_URL with value', () => {
		const actionSpy = spy();
		const actionProps = mapDispatchToProps(actionSpy);
		actionProps.submitSearch('test');
		expect(actionSpy.called).to.equal(true);
		expect(actionSpy.args[0][0]).to.deep.equal({type: 'GO_TO_URL', value: 'test'});
	});
});

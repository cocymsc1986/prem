/* eslint-env mocha */
import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import sinonChai from 'sinon-chai';
import Loader from '../../../client/components/Loader';

const { expect } = chai;
chai.use(sinonChai);

import TeamSearch from '../../../client/components/team-search/TeamSearch';

describe('TeamSearch component', () => {
	let component;
	context('When error retrieving data', () => {
		beforeEach(() => {
			const data = {};
			const error = { error: 'test' };

			component = shallow(<TeamSearch data={data} error={error} />);
		});

		it('Should render an error message', () => {
			expect(component.find('[data-test="error"]').text()).to.equal(
				'Sorry, there was an error retrieving the player data.'
			);
		});
	});

	context('Without data', () => {
		beforeEach(() => {
			component = shallow(<TeamSearch />);
		});

		it('Should render a Loader', () => {
			expect(component.find(Loader)).to.have.length(1);
		});
	});

	context.only('With data', () => {
		beforeEach(() => {
			const data = {
				elements: [
					{
						first_name: 'Adam',
						web_name: 'Lallana',
						team: 1,
						form: 2.0,
						status: 'a',
						points_per_game: 2.2,
						now_cost: 91,
						total_points: 89
					},
					{
						first_name: 'Alvaro',
						web_name: 'Morata',
						team: 1
					}
				]
			};
			component = shallow(<TeamSearch data={data} team='Arsenal' />);
		});

		it('Should not render a Loader', () => {
			expect(component.find(Loader)).to.have.length(0);
		});

		it('Should render team players', () => {
			expect(component.find('[data-test="player-0"] td').first().text()).to.equal('Adam Lallana');
			expect(component.find('[data-test="player-1"] td').first().text()).to.equal('Alvaro Morata');
		});

		it('Should render players form', () => {
			expect(component.find('[data-test="player-0"] td').at(1).text()).to.equal('2');
		});

		it('Should render players status', () => {
			expect(component.find('[data-test="player-0"] td').at(2).text()).to.equal('a');
		});

		it('Should render players points per game', () => {
			expect(component.find('[data-test="player-0"] td').at(3).text()).to.equal('2.2');
		});

		it('Should render players cost', () => {
			expect(component.find('[data-test="player-0"] td').at(4).text()).to.equal('9.1');
		});

		it('Should render players total points', () => {
			expect(component.find('[data-test="player-0"] td').at(5).text()).to.equal('89');
		});
	});
});

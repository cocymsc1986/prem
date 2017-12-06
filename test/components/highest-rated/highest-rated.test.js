/* eslint-env mocha */
import React from 'react';
import {shallow} from 'enzyme';
import chai from 'chai';
import sinonChai from 'sinon-chai';

const {expect} = chai;

chai.use(sinonChai);

import HighestRated from '../../../client/components/highest-rated/HighestRated';
import Loader from '../../../client/components/Loader';

describe('HighestRated component', () => {
	context('With error', () => {
		it('Should render an error message', () => {
			const component = shallow(<HighestRated error={{some: 'error'}} position='Defender'/>);

			expect(component.find('[data-test="error"]').text()).to.equal(
				'Sorry, there was an error retrieving the player data.'
			);
		});
	});

	context('Without data', () => {
		it('Should render the Loader component', () => {
			const component = shallow(<HighestRated position='Defender'/>);

			expect(component.find(Loader)).to.have.length(1);
		});
	});

	context('With data', () => {
		it('Should render the component', () => {
			const data = {
				elements: [
					{
						element_type: 1
					},
					{
						element_type: 2
					},
					{
						element_type: 3
					},
					{
						element_type: 4
					}
				]
			};

			const component = shallow(<HighestRated data={data} position='Defender'/>);
			expect(component.find(Loader)).to.have.length(0);
			expect(component).to.have.length(1);
		});

		it('Should render the top 10 players', () => {
			const data = {
				elements: [
					{
						element_type: 1
					},
					{
						element_type: 1
					},
					{
						element_type: 1
					},
					{
						element_type: 1
					},
					{
						element_type: 1
					},
					{
						element_type: 1
					},
					{
						element_type: 1
					},
					{
						element_type: 1
					},
					{
						element_type: 1
					},
					{
						element_type: 1
					},
					{
						element_type: 1
					}
				]
			};
			const positionData = [
				{
					element_type: 1
				},
				{
					element_type: 1
				},
				{
					element_type: 1
				},
				{
					element_type: 1
				},
				{
					element_type: 1
				},
				{
					element_type: 1
				},
				{
					element_type: 1
				},
				{
					element_type: 1
				},
				{
					element_type: 1
				},
				{
					element_type: 1
				},
				{
					element_type: 1
				}
			];
			const component = shallow(<HighestRated data={data} position='Goalkeeper'/>);
			const filteredData = component.instance().filterTopTen(positionData, 'Goalkeeper');
			expect(filteredData).length.to.be(10);
		});

		context('For each player', () => {
			let component;
			beforeEach(() => {
				const data = {
					elements: [
						{
							element_type: 1,
							now_cost: 56,
							total_points: 77,
							first_name: 'Petr',
							second_name: 'Cech',
							team: '1'
						},
						{
							element_type: 2,
							now_cost: 64,
							total_points: 50,
							first_name: 'Ben',
							second_name: 'Mee',
							team: '2'
						},
						{
							element_type: 3,
							now_cost: 83,
							total_points: 25,
							first_name: 'Adam',
							second_name: 'Lallana',
							team: '3'
						},
						{
							element_type: 4,
							now_cost: 61,
							total_points: 44,
							first_name: 'Jermaine',
							second_name: 'Defoe',
							team: '4'
						}
					]
				};

				component = shallow(<HighestRated data={data} position='midfielder'/>);
			});

			it('Should render the cost', () => {
				expect(component.find('[data-test="player-cost"]').text()).to.equal('8.3');
			});

			it('Should render the points', () => {
				expect(component.find('[data-test="player-points"]').text()).to.equal('25pts');
			});
		});

		context('When passed in position prop', () => {
			const data = {
				elements: [
					{
						element_type: 1,
						team: 1
					},
					{
						element_type: 1,
						team: 1
					},
					{
						element_type: 3,
						team: 1
					},
					{
						element_type: 4,
						team: 1
					},
					{
						element_type: 2,
						team: 1
					},
					{
						element_type: 2,
						team: 1
					},
					{
						element_type: 2,
						team: 1
					},
					{
						element_type: 3,
						team: 1
					},
					{
						element_type: 4,
						team: 1
					},
					{
						element_type: 1,
						team: 1
					},
					{
						element_type: 1,
						team: 1
					}
				]
			};

			it('Should filter players to Goalkeepers when passed goalkeeper', () => {
				const component = shallow(<HighestRated data={data} position='goalkeeper'/>);
				const filteredData = component.instance().filterPosition(data, 'goalkeeper');

				expect(filteredData).to.deep.equal([
					{
						element_type: 1,
						team: 1
					},
					{
						element_type: 1,
						team: 1
					},
					{
						element_type: 1,
						team: 1
					},
					{
						element_type: 1,
						team: 1
					}
				]);
			});

			it('Should filter players to Defender when passed defender', () => {
				const component = shallow(<HighestRated data={data} position='defender'/>);
				const filteredData = component.instance().filterPosition(data, 'defender');

				expect(filteredData).to.deep.equal([
					{
						element_type: 2,
						team: 1
					},
					{
						element_type: 2,
						team: 1
					},
					{
						element_type: 2,
						team: 1
					}
				]);
			});

			it('Should filter players to Midfielder when passed midfielder', () => {
				const component = shallow(<HighestRated data={data} position='midfielder'/>);
				const filteredData = component.instance().filterPosition(data, 'midfielder');

				expect(filteredData).to.deep.equal([
					{
						element_type: 3,
						team: 1
					},
					{
						element_type: 3,
						team: 1
					}
				]);
			});

			it('Should filter players to Forward when passed forward', () => {
				const component = shallow(<HighestRated data={data} position='forward'/>);
				const filteredData = component.instance().filterPosition(data, 'forward');

				expect(filteredData).to.deep.equal([
					{
						element_type: 4,
						team: 1
					},
					{
						element_type: 4,
						team: 1
					}
				]);
			});
		});
	});
});

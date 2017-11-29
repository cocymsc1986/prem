/* eslint-env mocha */
import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import sinonChai from 'sinon-chai';
import Loader from '../../../client/components/Loader';

const { expect } = chai;
chai.use(sinonChai);

import PlayerSearch from '../../../client/components/player-search/PlayerSearch';

describe('PlayerSearch component', () => {
	let component;
	context('When error retrieving data', () => {
		beforeEach(() => {
			const data = {};
			const error = { error: 'test' };

			component = shallow(<PlayerSearch data={data} error={error} />);
		});

		it('Should render an error message', () => {
			expect(component.find('[data-test="error"]').text()).to.equal(
				'Sorry, there was an error retrieving the player data.'
			);
		});
	});

	context('Without data', () => {
		beforeEach(() => {
			component = shallow(<PlayerSearch />);
		});

		it('Should render a Loader', () => {
			expect(component.find(Loader)).to.have.length(1);
		});
	});

	context('With data', () => {
		beforeEach(() => {
			const data = {
				elements: [
					{
						first_name: 'Adam',
						second_name: 'Lallana'
					},
					{
						first_name: 'Alvaro',
						second_name: 'Morata'
					}
				]
			};
			component = shallow(<PlayerSearch data={data} player='Adam Lallana' />);
		});

		it('Should not render a Loader', () => {
			expect(component.find(Loader)).to.have.length(0);
		});

		it('Should render player name/data', () => {
			expect(component.find('[data-test="name-header"]').text()).to.equal('Adam Lallana');
		});
	});

	describe('formatStatus function', () => {
		const data = {
			elements: [
				{
					first_name: 'Adam',
					second_name: 'Lallana',
					status: 'i'
				}
			]
		};
		component = shallow(<PlayerSearch data={data} player='Adam Lallana' />);

		it('Should amend the status i to Injured', () => {
			const filteredData = {
				first_name: 'Adam',
				second_name: 'Lallana',
				status: 'i'
			};
			const formattedData = component.instance().formatStatus(filteredData);
			expect(formattedData).to.deep.equal({
				first_name: 'Adam',
				second_name: 'Lallana',
				status: 'Injured'
			});
		});

		it('Should amend the status a to Available', () => {
			const filteredData = {
				first_name: 'Adam',
				second_name: 'Lallana',
				status: 'a'
			};
			const formattedData = component.instance().formatStatus(filteredData);
			expect(formattedData).to.deep.equal({
				first_name: 'Adam',
				second_name: 'Lallana',
				status: 'Available'
			});
		});

		it('Should amend the status d to Doubt', () => {
			const filteredData = {
				first_name: 'Adam',
				second_name: 'Lallana',
				status: 'd'
			};
			const formattedData = component.instance().formatStatus(filteredData);
			expect(formattedData).to.deep.equal({
				first_name: 'Adam',
				second_name: 'Lallana',
				status: 'Doubt'
			});
		});
	});

	describe('getPlayerData function', () => {
		beforeEach(() => {
			const data = {
				elements: [
					{
						first_name: 'Adam',
						second_name: 'Lallana',
						status: 'i',
						news: '',
						now_cost: 10.0,
						chance_of_playing_this_round: '100%',
						chance_of_playing_next_round: '100%',
						value_form: 2,
						cost_change_start: 2,
						cost_change_event: 0,
						in_dreamteam: '',
						dreamteam_count: 1,
						selected_by: 7,
						form: 1.3,
						transfers_out_event: 699,
						transfers_in_event: 3499,
						event_points: 0,
						total_points: 45,
						points_per_game: 1,
						goals_scored: 4,
						assists: 3,
						clean_sheets: 3,
						goals_conceded: 8,
						own_goals: 0,
						penalties_saved: 0,
						penalties_missed: 0,
						yellow_cards: 2,
						red_cards: 0,
						bonus: 6,
						influence: 1,
						creativity: 1,
						threat: 1,
						team: 10
					},
					{
						first_name: 'Alvaro',
						second_name: 'Morata',
						status: 'i',
						news: '',
						now_cost: 11.0,
						chance_of_playing_this_round: '100%',
						chance_of_playing_next_round: '100%',
						value_form: 4,
						cost_change_start: 9,
						cost_change_event: 1,
						in_dreamteam: '',
						dreamteam_count: 4,
						selected_by: 22,
						form: 3.1,
						transfers_out_event: 1999,
						transfers_in_event: 349999,
						event_points: 2,
						total_points: 81,
						points_per_game: 3,
						goals_scored: 8,
						assists: 3,
						clean_sheets: 4,
						goals_conceded: 13,
						own_goals: 0,
						penalties_saved: 0,
						penalties_missed: 0,
						yellow_cards: 1,
						red_cards: 0,
						bonus: 12,
						influence: 2,
						creativity: 2,
						threat: 3,
						team: 5
					}
				]
			};
			component = shallow(<PlayerSearch data={data} player='Adam Lallana' />);
		});

		it('Should filter the data to the searched player', () => {
			const filteredData = component.instance().getPlayerData();
			expect(filteredData).to.deep.equal({
				first_name: 'Adam',
				second_name: 'Lallana',
				status: 'Injured',
				news: '',
				now_cost: 10.0,
				chance_of_playing_this_round: '100%',
				chance_of_playing_next_round: '100%',
				value_form: 2,
				cost_change_start: 2,
				cost_change_event: 0,
				in_dreamteam: '',
				dreamteam_count: 1,
				selected_by: 7,
				form: 1.3,
				transfers_out_event: 699,
				transfers_in_event: 3499,
				event_points: 0,
				total_points: 45,
				points_per_game: 1,
				goals_scored: 4,
				assists: 3,
				clean_sheets: 3,
				goals_conceded: 8,
				own_goals: 0,
				penalties_saved: 0,
				penalties_missed: 0,
				yellow_cards: 2,
				red_cards: 0,
				bonus: 6,
				influence: 1,
				creativity: 1,
				threat: 1,
				team: 10
			});
		});
	});
});

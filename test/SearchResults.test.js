/* eslint-env mocha */
import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import sinonChai from 'sinon-chai';

const { expect } = chai;

chai.use(sinonChai);

import SearchResults from '../client/components/SearchResults';
import PlayerSearchContainer from '../client/components/player-search/PlayerSearchContainer';
import TeamSearchContainer from '../client/components/team-search/TeamSearchContainer';

describe('SearchResults component', () => {
	context('With player param', () => {
		const matchParams = {
			params: {
				player: 'Adam Lallana',
				team: null
			}
		};
		const component = shallow(<SearchResults match={matchParams} />);

		it('Should render playersearch component', () => {
			expect(component.find(PlayerSearchContainer)).to.have.length(1);
		});
	});
	context('With team param', () => {
		const matchParams = {
			params: {
				player: null,
				team: 'Arsenal'
			}
		};
		const component = shallow(<SearchResults match={matchParams} />);

		it('Should render teamsearch component', () => {
			expect(component.find(TeamSearchContainer)).to.have.length(1);
		});
	});
});

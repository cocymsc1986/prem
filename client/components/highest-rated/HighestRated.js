import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css, StyleSheet} from 'aphrodite';
import {colours, spacingValue} from '../../ui/theme';

import getClubInfo from '../../helpers/getClubInfo';

import Loader from '../Loader';

const styles = StyleSheet.create({
	container: {
		width: '20%'
	},
	positionHeader: {
		textTransform: 'capitalize',
		marginTop: 0
	},
	player: {
		display: 'flex'
	},
	playerLink: {
		color: colours.purple,
		textDecoration: 'none',

		':hover': {
			color: colours.blue
		}
	},
	playerName: {
		width: '50%'
	},
	totalVal: {
		fontWeight: 'bold',
		width: '20%'
	},
	teamAbbr: {
		fontWeight: 'bold',
		margin: `0 0 ${spacingValue / 2}px`
	}
});

class HighestRated extends Component {
	constructor(props) {
		super(props);
	}

	filterPosition(data, position) {
		const positionMap = {
			goalkeeper: 1,
			defender: 2,
			midfielder: 3,
			forward: 4
		};

		return data.elements.filter(element => element.element_type === positionMap[position]);
	}

	filterTopTen(data) {
		data.sort((a, b) => a.total_points - b.total_points);
		data.reverse();
		return data.slice(0, 10);
	}

	filterData(data, position) {
		let filteredData = this.filterPosition(data, position);
		return this.filterTopTen(filteredData);
	}

	renderError() {
		return (
			<div data-test='error'>
				Sorry, there was an error retrieving the player data.
			</div>
		);
	}

	renderData() {
		const {data, position} = this.props;
		const filteredData = data && this.filterData(data, position);
		const getPlayerLink = element => `player/${element.first_name}%20${element.second_name}`;

		return (
			<div className={css(styles.container)}>
				{!data && <Loader />}
				{data &&
					<div>
						<h3 className={css(styles.positionHeader)}>{position}s</h3>
						{filteredData.map((element, i) => {
							return (
								<div key={i} className={css(styles.player)}>
									<div className={css(styles.playerName)}>
										<a className={css(styles.playerLink)} href={getPlayerLink(element)}>
											{element.web_name}
										</a>
										<p className={css(styles.teamAbbr)}>{getClubInfo(element.team).abbr}</p>
									</div>
									<span className={css(styles.totalVal)} data-test='player-cost'>
										{element.now_cost / 10}
									</span>
									<span className={css(styles.totalVal)} data-test='player-points'>
										{element.total_points}pts
									</span>
								</div>
							);
						})}
					</div>
				}
			</div>
		);
	}

	render() {
		const {error} = this.props;

		if (error) {
      return this.renderError();
    }
    return this.renderData();
	}
}

HighestRated.propTypes = {
	data: PropTypes.object,
	position: PropTypes.string,
	error: PropTypes.object
};

export default HighestRated;


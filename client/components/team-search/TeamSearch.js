import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css, StyleSheet} from 'aphrodite';

import Loader from '../../components/Loader';
import getClubInfo from '../../helpers/getClubInfo';
import {maxWidth, colours, spacing, spacingValue, font} from '../../ui/theme';

const styles = StyleSheet.create({
	header: {
    marginTop: '5px',
    padding: `${spacingValue * 2}px`
  },
  badgeContainer: {
    textAlign: 'right'
  },
  badge: {
    maxWidth: '100px'
  },
  headerLink: {
    color: '#fff'
  }
});

class TeamSearch extends Component {
	constructor(props) {
		super(props);
	}

	getTeam() {
		const {team, data} = this.props;
		return data.teams.filter(item => item.name === team)[0];
	}

	getPlayers() {
		const {team, data} = this.props;
		return data.elements.filter(el => getClubInfo(el.team).apiname === team);

	}

	render() {
		const {data} = this.props;
		const teamData = data && this.getTeam();
		const players = data && this.getPlayers();
		const teamInfo = data && getClubInfo(players[0].team);
		const badgeUrl = data && `../${teamInfo.badgeUrl}`;

		console.log('TEAM: ', teamInfo);
		console.log('PLAYERS: ', players);

		return (
			<div>
				{!data && <Loader />}
				{data &&
					<div>
						<div
						className={css(styles.header)}
						style={{background: teamInfo.primaryColour, color: teamInfo.secondaryColour}}
					>
						<div className={css(styles.wrapper)}>
							<div>
								<a style={{color: teamInfo.secondaryColour}} href="/">&lt; Back</a>
								<h1 data-test='name-header'>{teamInfo.name}</h1>
							</div>
							<div className={css(styles.badgeContainer)}>
								<img className={css(styles.badge)} src={badgeUrl} alt='teamBadge'/>
							</div>
						</div>
					</div>
						<div>{teamData.name}</div>
						<div>
							{players.map(player => {
								console.log(player);
								return (
									<span>{player.first_name}</span>
								);
							})}
						</div>
					</div>
				}
			</div>
		);
	}
}

TeamSearch.propTypes = {
	data: PropTypes.object,
	team: PropTypes.string.isRequired,
	error: PropTypes.object
};

export default TeamSearch;

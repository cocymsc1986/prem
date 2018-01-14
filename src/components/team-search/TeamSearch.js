import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css, StyleSheet} from 'aphrodite';

import Loader from '../loader';
import getClubInfo from '../../helpers/getClubInfo';
import {maxWidth, spacing, spacingValue} from '../../ui/theme';

const styles = StyleSheet.create({
	wrapper: {
    maxWidth: maxWidth,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between'
  },
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
	},
	teamInfo: {
		maxWidth: maxWidth,
		margin: '0 auto',
		paddingLeft: spacing
	},
	tableHeader: {
		paddingRight: spacing,
		textAlign: 'left'
	},
	tableCell: {
		paddingRight: spacing
	},
	tableRow: {
		marginBottom: '6px'
	},
	key: {
		marginTop: spacing
	},
	keyItem: {
		fontWeight: 'bold',
		paddingRight: spacing
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

	renderError() {
    return (
      <div data-test='error'>
        Sorry, there was an error retrieving the player data.
      </div>
    );
	}

	renderData() {
		const {data} = this.props;
		const players = data && this.getPlayers();
		const teamInfo = data && getClubInfo(players[0].team);
		const badgeUrl = data && `../${teamInfo.badgeUrl}`;

		const getPlayerLink = player => encodeURI(`/player/${player.first_name} ${player.second_name}`);

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
						<div className={css(styles.teamInfo)}>
							<h3>Players</h3>
							<div>
								<table>
									<thead>
										<th className={css(styles.tableHeader)}>Name</th>
										<th className={css(styles.tableHeader)}>Form</th>
										<th className={css(styles.tableHeader)}>Status</th>
										<th className={css(styles.tableHeader)}>Points per game</th>
										<th className={css(styles.tableHeader)}>Cost</th>
										<th className={css(styles.tableHeader)}>Points</th>
									</thead>
									<tbody>
										{players.map((player, i) => {
											const playerId = `player-${i}`;
											return (
												<tr className={css(styles.tableRow)} data-test={playerId}>
													<td className={css(styles.tableCell)}>
														<a href={getPlayerLink(player)}>
															{player.first_name} {player.web_name}
														</a>
													</td>
													<td className={css(styles.tableCell)}>{player.form}</td>
													<td className={css(styles.tableCell)}>{player.status}</td>
													<td className={css(styles.tableCell)}>{player.points_per_game}</td>
													<td className={css(styles.tableCell)}>{player.now_cost / 10}</td>
													<td className={css(styles.tableCell)}>{player.total_points}</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>
							<div className={css(styles.key)}>
								<h4>Status Key</h4>
								<table>
									<tr>
										<td className={css(styles.keyItem)}>a</td>
										<td>Available</td>
									</tr>
									<tr>
										<td className={css(styles.keyItem)}>d</td>
										<td>Doubt</td>
									</tr>
									<tr>
										<td className={css(styles.keyItem)}>i</td>
										<td>Injured</td>
									</tr>
									<tr>
										<td className={css(styles.keyItem)}>s</td>
										<td>Suspended</td>
									</tr>
									<tr>
										<td className={css(styles.keyItem)}>u</td>
										<td>Unavailable</td>
									</tr>
								</table>
							</div>
						</div>
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

TeamSearch.propTypes = {
	data: PropTypes.object,
	team: PropTypes.string.isRequired,
	error: PropTypes.object
};

export default TeamSearch;

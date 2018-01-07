import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import {StyleSheet, css} from 'aphrodite';
import {maxWidth, colours, spacing, spacingValue, font} from '../../ui/theme';

import {PlayerDataMap} from './PlayerDataMap';
import getClubInfo from '../../helpers/getClubInfo';


const styles = StyleSheet.create({
  wrapper: {
    maxWidth: maxWidth,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between'
  },
  mainStatsContainer: {
    maxWidth: maxWidth,
    margin: '0 auto',
    display: 'flex',
    flexFlow: 'wrap',
    padding: spacing,
    justifyContent: 'space-between'
  },
  mainStat: {
    width: '24%',
    background: colours.greyDarkest,
    color: '#fff',
    padding: `0 ${spacing}`,
    boxSizing: 'border-box',
    margin: `${spacingValue / 2}px 0`
  },
  statList: {
    maxWidth: maxWidth,
    listStyleType: 'none',
    padding: 0,
    margin: '0 auto'
  },
  listItem: {
    marginBottom: `${spacingValue / 2}px`
  },
  listItemValue: {
    fontWeight: 'bold',
    fontSize: font.size.lead
  },
  playerHeader: {
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

class PlayerSearch extends Component {
  constructor(props) {
    super(props);
  }

  formatStatus(data) {
    if (data.status === 'a') {
      data.status = 'Available';
      return data;
    } else if (data.status === 'd') {
      data.status = 'Doubt';
      return data;
    }

    data.status = 'Injured';
    return data;
  }

  getPlayerData() {
    const playerSearched = this.props.player;
    const {data} = this.props;
    const dataFields = [
      'first_name',
      'second_name',
      'status',
      'news',
      'now_cost',
      'chance_of_playing_this_round',
      'chance_of_playing_next_round',
      'value_form',
      'cost_change_start',
      'cost_change_event',
      'in_dreamteam',
      'dreamteam_count',
      'selected_by',
      'form',
      'transfers_out_event',
      'transfers_in_event',
      'event_points',
      'total_points',
      'points_per_game',
      'goals_scored',
      'assists',
      'clean_sheets',
      'goals_conceded',
      'own_goals',
      'penalties_saved',
      'penalties_missed',
      'yellow_cards',
      'red_cards',
      'bonus',
      'influence',
      'creativity',
      'threat',
      'team'
    ];

    if (data) {
      let playerData = data.elements.filter(player => {
        const name = `${player.first_name} ${player.second_name}`;
        return playerSearched.toLowerCase() === name.toLowerCase();
      });

      playerData = playerData[0];

      let reducedData = {};

      dataFields.forEach((field, index) => {
        if (
          field === 'now_cost' ||
          field === 'cost_change_start' ||
          field === 'cost_change_event'
        ) {
          reducedData = {
            ...reducedData,
            [dataFields[index]]: playerData[field] / 10
          };
        } else {
          reducedData = {
            ...reducedData,
            [dataFields[index]]: playerData[field]
          };
        }
      });

      return this.formatStatus(reducedData);
    }
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
    const playerData = data && this.getPlayerData();
    const team = data && getClubInfo(playerData.team);
    const teamUrl = team && `/team/${team.apiname}`;
    const badgeUrl = data && `../${team.badgeUrl}`;

    return (
      <div>
        {!data && <Loader />}
        {data &&
          <div>
            <div
              className={css(styles.playerHeader)}
              style={{background: team.primaryColour, color: team.secondaryColour}}
            >
              <div className={css(styles.wrapper)}>
                <div>
                  <a style={{color: team.secondaryColour}} href="/">&lt; Back</a>
                  <h1 data-test='name-header'>{playerData.first_name} {playerData.second_name}</h1>
                  <h4><a style={{color: team.secondaryColour}} href={teamUrl}>{team.name}</a></h4>
                </div>
                <div className={css(styles.badgeContainer)}>
                  <img className={css(styles.badge)} src={badgeUrl} alt='teamBadge'/>
                </div>
              </div>
            </div>
            <div className={css(styles.mainStatsContainer)}>
              <div className={css(styles.mainStat)}>
                <h3>{PlayerDataMap.now_cost}</h3>
                <h2>{playerData.now_cost}</h2>
              </div>
              <div className={css(styles.mainStat)}>
                <h3>{PlayerDataMap.total_points}</h3>
                <h2>{playerData.total_points}</h2>
              </div>
              <div className={css(styles.mainStat)}>
                <h3>{PlayerDataMap.event_points}</h3>
                <h2>{playerData.event_points}</h2>
              </div>
              <div className={css(styles.mainStat)}>
                <h3>{PlayerDataMap.status}</h3>
                <h2>{playerData.status}</h2>
              </div>
              <div className={css(styles.mainStat)}>
                <h3>{PlayerDataMap.goals_scored}</h3>
                <h2>{playerData.goals_scored}</h2>
              </div>
              <div className={css(styles.mainStat)}>
                <h3>{PlayerDataMap.assists}</h3>
                <h2>{playerData.assists}</h2>
              </div>
              <div className={css(styles.mainStat)}>
                <h3>{PlayerDataMap.bonus}</h3>
                <h2>{playerData.bonus}</h2>
              </div>
              <div className={css(styles.mainStat)}>
                <h3>{PlayerDataMap.form}</h3>
                <h2>{playerData.form}</h2>
              </div>
            </div>
            <ul className={css(styles.statList)}>
              <a href="/">&lt; Back</a>
              <h2>All stats</h2>
              {data && Object.keys(playerData).map(stat => {
                return (
                  <li className={css(styles.listItem)} key={stat}>
                    {PlayerDataMap[stat]}: <span className={css(styles.listItemValue)}>{playerData[stat]}</span>
                  </li>
                );
              })}
            </ul>
        </div>}
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

PlayerSearch.propTypes = {
  data: PropTypes.object,
  player: PropTypes.string,
  error: PropTypes.object
};

export default PlayerSearch;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  statList: {
    listStyleType: 'none'
  }
});

class PlayerSearch extends Component {
  constructor(props) {
    super(props);
  }

  getPlayerData() {
    const playerSearched = this.props.player;
    const {data} = this.props;
    const dataFields = [
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
        reducedData = {
          ...reducedData,
          [dataFields[index]]: playerData[field]
        };
      });

      return reducedData;
    }
  }

  render() {
    const {data} = this.props;
    const playerData = data && this.getPlayerData();
    return (
      <div>
        {!data && <Loader />}
        {data &&
          <div>
            <h2>{playerData.first_name} {playerData.second_name}</h2>
            <ul className={css(styles.statList)}>
            {data && Object.keys(playerData).map( stat => {
              return (
                <li key={stat}>{stat}: {playerData[stat]}</li>
              );
            })}
          </ul>
        </div>}
      </div>
    );
  }
}

PlayerSearch.propTypes = {
  data: PropTypes.object,
  player: PropTypes.string,
  error: PropTypes.object
};

export default PlayerSearch;

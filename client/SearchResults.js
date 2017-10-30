import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PlayerSearchContainer from './components/player-search/PlayerSearchContainer';
import TeamSearchContainer from './components/team-search/TeamSearchContainer';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const searchParams = this.props.match.params;

    return (
			<div>
        {searchParams.player && <PlayerSearchContainer player={searchParams.player} />}
        {searchParams.team && <TeamSearchContainer team={searchParams.team}/>}
      </div>
    );
  }
}

SearchResults.propTypes = {
	match: PropTypes.object
};

export default SearchResults;

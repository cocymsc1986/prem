import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PlayerSearchContainer from '../player-search';
import TeamSearchContainer from '../team-search';

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

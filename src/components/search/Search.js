import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TypeaheadModule from 'react-typeahead';
const Typeahead = TypeaheadModule.Typeahead;
import Loader from '../loader';

import {StyleSheet, css} from 'aphrodite';
import {colours, font, maxWidth, spacingValue} from '../../ui/theme.js';

const styles = StyleSheet.create({
  searchBlock: {
    maxWidth: maxWidth,
    margin: `${spacingValue}px auto`
  },
  searchContainer: {
    width: '100%',
    background: colours.green
  },
  suggestions: {
    width: 'auto',
    background: 'white'
  },
  searchInput: {
    height: '2rem',
    fontFamily: font.familyDefault,
    fontSize: font.size.lead,
    padding: '12px',
    width: '100%',
    maxWidth: '600px',
    margin: '1rem',
    border: 'none'
  },
  searchDropdown: {
    background: '#99FFCF',
    padding: '1rem',
    listStyleType: 'none',
    margin: 0
  },
  searchDropdownItem: {
    padding: '0.5rem',
    color: '#fff',

    ':hover': {
        background: '#33FFA0'
    }
  },
  listAnchor: {
    color: 'black',
    textDecoration: 'none'
  }
});

class Search extends Component {
  constructor(props) {
    super(props);
  }

  createSearchableData = () => {
    const {data} = this.props;
    let searchableData = [];

    if (data) {
      data.elements.map(player => {
        searchableData.push(`${player.first_name} ${player.second_name}`);
      });

      return searchableData;
    }
  };

  onSubmitSearch = value => {
    const path = `player/${value}`;
    this.props.submitSearch(path);
  }

  render() {
    const playerData = this.createSearchableData();

    if (!playerData) {
      return <Loader />;
    }

    return (
      <section className={css(styles.searchBlock)}>
        <h2>Search for a player</h2>
        <div className={css(styles.searchContainer)}>
          <Typeahead
            options={playerData}
            maxVisible={20}
            customClasses={{
              input: css(styles.searchInput),
              results: css(styles.searchDropdown),
              listItem: css(styles.searchDropdownItem)
            }}
            onOptionSelected={this.onSubmitSearch} />
        </div>
      </section>
    );
  }
}

Search.propTypes = {
  data: PropTypes.object,
  submitSearch: PropTypes.func.isRequired
};

export default Search;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader';
import {StyleSheet, css} from 'aphrodite';

import {colours, maxWidth, spacingValue} from '../../ui/theme.js';

const styles = StyleSheet.create({
  popularBlock: {
    maxWidth: maxWidth,
    margin: `${spacingValue * 2}px auto`
  },
  popularContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    margin: '0 -1%'
  },
  header: {
    marginBottom: 0
  },
  mainItems: {
    flex: '2 0 40%',
    margin: '1rem 1%',
    padding: '1rem 2%',
    background: '#f8f8f8'
  },
  secondaryItems: {
    flex: '1 0 15%',
    margin: '1rem 1% 0',
    padding: '1rem 2%',
    background: '#f8f8f8'
  },
  purple: {
    background: colours.purple,
    color: '#ffffff'
  },
  blue: {
    background: colours.blue
  },
  greyOne: {
    background: colours.greyLight
  },
  greyTwo: {
    background: colours.grey
  },
  greyThree: {
    background: colours.greyDark
  },
  greyFour: {
    background: colours.greyDarker
  }
});

class Popular extends Component {
  renderKey(key, i) {
    const { mostPopular } = this.props;
    if (mostPopular[key] && (key !== 'ict_index')) {
      return (
        <div key={key} className={this.getStyles(key, i)}>
          <p>{this.getTitle(key)}</p>
          <h2>{mostPopular[key].web_name || ''} {mostPopular[key][key] || ''}</h2>
        </div>
      );
    }
  }

  getStyles(key, i) {
    const colorArray = [styles.purple, styles.blue, styles.greyOne, styles.greyTwo, styles.greyThree, styles.greyFour];

    if (key === 'selected_by_percent' || key === 'total_points') {
      return css(styles.mainItems, colorArray[i]);
    }

    return css(styles.secondaryItems, colorArray[i]);
  }

  getTitle(key) {
    switch(key) {
      case 'selected_by_percent':
        return 'Most Selected';
      case 'total_points':
        return 'Highest Points';
      case 'transfers_in_event':
        return 'Most Transferred In';
      case 'transfers_out_event':
        return 'Most Transferred Out';
      case 'form':
        return 'Form';
      case 'value_form':
        return 'Best Value/Form Balance';
    }
  }

  render() {
    const {mostPopular} = this.props;

    return (
      <section className={css(styles.popularBlock)}>
        <h2 className={css(styles.header)}>This Gameweek's stats</h2>
        <div className={css(styles.popularContainer)}>
          {!mostPopular &&
            <Loader />
          }
          {mostPopular &&
            Object.keys(mostPopular || {}).map((key, i) => {
              return (
                this.renderKey(key, i)
              );
            })
          }
        </div>
      </section>
    );
  }
}

Popular.propTypes = {
  mostPopular: PropTypes.object,
  error: PropTypes.object
};

export default Popular;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';
import {font, maxWidth} from '../../ui/theme';
import Loader from '../loader';

const styles = StyleSheet.create({
  intro: {
    fontSize: font.size.lead,
    lineHeight: font.size.leadValue * 1.5 + 'px',
    maxWidth: maxWidth,
    margin: '0 auto'
  }
});

class Intro extends Component {
  render() {
    const {error, data} = this.props;
    const gameweek = data && data['current-event'];
    const deadline = data && data.events[gameweek].deadline_time_formatted;

    if (error) {
      return (
        <div className={css(styles.intro)}>
          <p data-test='dataless'>
            Welcome to Fantasy Prem stats site. This site surfaces current stats for
            Premier League Fantasy Football in an easy to digest format. All points are
            up to date as of this gameweek.
          </p>
        </div>
      );
    }

    if (!data) {
      return (
        <Loader />
      );
    }

    return (
      <div className={css(styles.intro)}>
        <p>
          Welcome to Fantasy Prem stats site. This site surfaces current stats for
          Premier League Fantasy Football in an easy to digest format. All points are
          up to date as of gameweek {gameweek} for deadline {deadline}. Points will
          next be updated at the completion of gameweek {gameweek + 1}.
        </p>
      </div>
    );
  }
}

Intro.propTypes = {
  data: PropTypes.object,
  error: PropTypes.object
};

export default Intro;

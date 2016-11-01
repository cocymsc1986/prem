import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';
import { font } from '../ui/theme';

const styles = StyleSheet.create({
  intro: {
    fontSize: font.size.lead,
    lineHeight: font.size.leadValue * 1.5 + 'px'
  }
});

class Intro extends Component {
  render() {
    return (
      <div className={css(styles.intro)}>
        <p>
          Welcome to Fantasy Prem stats site. This site surfaces current stats for
          Premier League Fantasy Football in an easy to digest format. All points are
          up to date as of gameweek **number** for deadline **date**. Points will be
          next updated at the completion of gameweek **number**.
        </p>
      </div>
    );
  }
}

export default Intro;

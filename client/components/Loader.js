import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  loader: {
    ':after': {
      borderRadius: '50%',
      width: '5em',
      height: '5em'
    },
    borderRadius: '50%',
    width: '5em',
    height: '5em',
    margin: '60px auto',
    fontSize: '10px',
    position: 'relative',
    textIndent: '-9999em',
    borderTop: '7px solid rgba(0, 0, 255, 0.2)',
    borderRight: '7px solid rgba(0, 0, 255, 0.2)',
    borderBottom: '7px solid rgba(0, 0, 255, 0.2)',
    borderLeft: '7px solid #38003C',
    transform: 'translateZ(0)',
    animationName: {
      '0%': {
      transform: 'rotate(0deg)'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    },
    animationDuration: '1.1s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  }
});

class Loader extends Component {
  render() {
    return (
      <div className={css(styles.loader)}>Here</div>
    );
  }
}

export default Loader;

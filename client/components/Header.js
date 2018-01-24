import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    background: '#00FF87',
    height: '75px'
  },
  title: {
    margin: 0,
    color: '#38003C',
    padding: '1rem',
    fontWeight: 'bold'
  },
  logo: {
    background: 'url(/public/assets/premier-league-logo-header.png) no-repeat',
    backgroundSize: '110px',
    height: '75px',
    width: '130px',
    float: 'left'
  }
});

class Header extends Component {
  render() {
    return (
      <div className={css(styles.header)}>
        <div className={css(styles.logo)}></div>
        <h1 className={css(styles.title)}>Fantasy Prem</h1>
      </div>
    );
  }
}

export default Header;

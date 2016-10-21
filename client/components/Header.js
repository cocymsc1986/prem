import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    background: '#00FF87',
    padding: '1rem',
    borderBottom: '5px solid #38003C'
  },
  title: {
    margin: 0,
    color: '#38003C',
    textAlign: 'center'
  },
  logo: {
    background: 'url(client/public/assets/premier-league-logo-header.png) no-repeat'
  }
});

class Header extends Component {
  render() {
    return (
      <div className={css(styles.header)}>
        <div className={css(styles.logo)}>&nbsp;</div>
        <h1 className={css(styles.title)}>Fantasy Prem</h1>
      </div>
    );
  }
}

export default Header;

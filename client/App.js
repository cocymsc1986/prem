import React, {Component} from 'react';

import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {Provider} from 'react-redux';
import {css, StyleSheet} from 'aphrodite';
import Routes from './Routes';

import Header from './components/Header';
import Footer from './components/Footer';
import {colours} from './ui/theme';

import reducer from './redux/reducers/index';
const environment = process.env.NODE_ENV;

const loggerMiddleware = createLogger();
let store;

if (environment === 'development') {
  store = createStore(reducer,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ));
} else {
  store = createStore(reducer,
    applyMiddleware(
      thunkMiddleware
    ));
}

import {getData} from './redux/actions/actions';

const styles = StyleSheet.create({
  bodyStyles: {
    color: colours.black
  }
});

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    store.dispatch(getData());
  }
  render() {
    return (
      <Provider store={store}>
        <div className={css(styles.bodyStyles)}>
          <Header />
          <Routes />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';

import { maxWidth } from './ui/theme';
import Header from './components/Header';
import Intro from './components/Intro';
import PopularContainer from './components/popular/PopularContainer';
import reducer from './redux/reducers/mainData';

const loggerMiddleware = createLogger();
const store = createStore(reducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    // Comment/Un-Comment following line for redux console logging
    // loggerMiddleware // neat middleware that logs actions
  ));

import { getData } from './redux/actions/actions';

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: maxWidth,
    margin: '0 auto'
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
        <div>
          <Header />
          <div className={css(styles.wrapper)}>
            <Intro />
            <PopularContainer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

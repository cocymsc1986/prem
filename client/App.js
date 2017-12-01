import React, {Component} from 'react';

import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {Provider} from 'react-redux';
import Routes from './Routes';

import Header from './components/Header';

import reducer from './redux/reducers/index';

const loggerMiddleware = createLogger();
const store = createStore(reducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    // Comment/Un-Comment following line for redux console logging
    loggerMiddleware // middleware that logs actions
  ));

import {getData} from './redux/actions/actions';

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
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;

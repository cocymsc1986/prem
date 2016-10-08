import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';

import Header from './components/Header';
import Popular from './components/popular/Popular';
import reducer from './redux/reducers/reducer';

const loggerMiddleware = createLogger();
const store = createStore(reducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ));

import { getData } from './redux/actions/actions';

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
          <Popular />
        </div>
      </Provider>
    );
  }
}

export default App;

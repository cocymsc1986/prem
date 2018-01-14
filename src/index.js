import React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { css, StyleSheet } from 'aphrodite';
import { colours } from './ui/theme';
import App from './components/app';
import Header from './components/header';
import reducers from './redux/reducers';

const history = createBrowserHistory();
const store = createStore(reducers, applyMiddleware(
  routerMiddleware(history),
  thunkMiddleware)
);

const styles = StyleSheet.create({
  bodyStyles: {
    color: colours.greyDarkest
  }
});

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className={css(styles.bodyStyles)}>
        <Header />
        <App />
      </div>
    </ConnectedRouter>
  </Provider>
, document.getElementById('app'));

if(process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
  module.hot.accept('./redux/reducers', () => {
    store.replaceReducer(require('./redux/reducers').default);
  });
}

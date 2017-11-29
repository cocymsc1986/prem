/* eslint-env mocha */
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetch from 'isomorphic-fetch';
import { expect } from 'chai';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

it('should dispatch go to URL action', () => {
  const initialState = {};
  const goToUrl = { type: 'GO_TO_URL' };

  const store = mockStore(initialState);
  store.dispatch(goToUrl);

  const actions = store.getActions();

  expect(actions[0]).to.equal(goToUrl);
});

it('should dispatch intial data success action', () => {
  const initialState = {};
  const initialDataSuccess = { type: 'INITIAL_DATA_SUCCESS' };

  const store = mockStore(initialState);
  store.dispatch(initialDataSuccess);

  const actions = store.getActions();

  expect(actions[0]).to.equal(initialDataSuccess);
});

it('should dispatch fetching data action', () => {
  const initialState = {};
  const fetchingData = { type: 'FETCHING_DATA' };

  const store = mockStore(initialState);
  store.dispatch(fetchingData);

  const actions = store.getActions();

  expect(actions[0]).to.equal(fetchingData);
});

it('should dispatch intial data error action', () => {
  const initialState = {};
  const initialDataError = { type: 'INITIAL_DATA_ERROR' };

  const store = mockStore(initialState);
  store.dispatch(initialDataError);

  const actions = store.getActions();

  expect(actions[0]).to.equal(initialDataError);
});

it('should dispatch get most popular action', () => {
  const initialState = {};
  const getMostPopular = { type: 'GET_MOST_POPULAR' };

  const store = mockStore(initialState);
  store.dispatch(getMostPopular);

  const actions = store.getActions();

  expect(actions[0]).to.equal(getMostPopular);
});

it('should execute promise', () => {
    function success() {
      return {
        type: 'INITIAL_DATA_SUCCESS'
      };
    }

    function getData() {
      return dispatch => {
        return fetch('http://test.com')
          .then(() => dispatch(success()));
      };
    }

    const store = mockStore({});

    return store.dispatch(getData())
      .then(() => {
        expect(store.getActions()[0][0]).to.equal(success()[0]);
      });
});

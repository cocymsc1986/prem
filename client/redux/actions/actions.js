import fetch from 'isomorphic-fetch';
import {
  INITIAL_DATA_SUCCESS,
  INITIAL_DATA_ERROR,
  FETCHING_DATA,
  GET_MOST_POPULAR
} from './actionTypes';

/*
 * actions
 */

export function fetchingData() {
  return {
    type: FETCHING_DATA
  };
}

export function initialDataSuccess(response) {
  return dispatch => {
    dispatch({
      type: INITIAL_DATA_SUCCESS,
      response
    });
  };
}

export function initialDataError(error) {
  return {
    type: INITIAL_DATA_ERROR,
    error
  };
}

export function getMostPopular() {
  return dispatch => {
    dispatch({
      type: GET_MOST_POPULAR
    });
  };
}

export function getData() {
  return function (dispatch) {
    // set pending
    dispatch(fetchingData());

    // fetch data
    return fetch('http://jokecamp.github.io/epl-fantasy-geek/js/static-data.json')
      .then(response => response.json())
      .then(data => {
        // dispatch as many times as we want here

        console.info('response success');
        dispatch(initialDataSuccess(data));
        dispatch(getMostPopular());
      });

      // Error handling needed
  };
}

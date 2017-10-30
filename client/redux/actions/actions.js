import fetch from 'isomorphic-fetch';
import {
  INITIAL_DATA_SUCCESS,
  INITIAL_DATA_ERROR,
  FETCHING_DATA,
  GET_MOST_POPULAR,
  GO_TO_URL
} from './actionTypes';

/*
 * actions
 */

export function goToUrl(url) {
  return {
    type: GO_TO_URL,
    value: url
  };
}

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
    dispatch(fetchingData());

    return fetch('http://jokecamp.github.io/epl-fantasy-geek/js/static-data.json')
      .then(response => response.json())
      .then(data => {
        console.info('response success');
        dispatch(initialDataSuccess(data));
        dispatch(getMostPopular());
      }).catch(error => {
        console.log('Error fetching data - ', error);
        dispatch(initialDataError(error));
      });
  };
}

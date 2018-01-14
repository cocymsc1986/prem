import { combineReducers } from 'redux';
import fantasyData from './fantasyData';
import { routerReducer } from 'react-router-redux';
import routing from './routing';

export default combineReducers({
  fantasyData,
  appRouting: routing,
  routing: routerReducer
});

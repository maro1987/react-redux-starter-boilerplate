import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './app-action-reducers';
import home from './home-action-reducers';

const reducers = combineReducers({
  app,
  home,
  routing: routerReducer
});

export default reducers;


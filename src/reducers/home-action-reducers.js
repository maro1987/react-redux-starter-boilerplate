import Immutable from 'immutable';
import createReducer from '../utils/redux/create-reducer';
import { HomeActionTypes } from '../actions/home/home-actions';

const initialState = Immutable.fromJS({
  items: []
});

export default createReducer(initialState, {
  [HomeActionTypes.HOME_DATA_LOADED]: (state, data) => (
    state.set('items', data)
  ),
  [HomeActionTypes.HOME_DATA_FAILED_TO_LOAD]: (state, error) => (
    state.set('error', error.message)
  )
});

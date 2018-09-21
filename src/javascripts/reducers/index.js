import { combineReducers } from 'redux';
import clock from './clock';
import loading from './loading';

const reducers = combineReducers({
  clock,
  loading
});

export default reducers;

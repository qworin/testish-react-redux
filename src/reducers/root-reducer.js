import { combineReducers } from 'redux';
import jobsReducer from './jobs-reducer';

const rootReducer = combineReducers({
  jobsReducer,
});

export default rootReducer;

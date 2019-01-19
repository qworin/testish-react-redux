import initialState from './initial-state';
import {
  FETCH_JOBS,
  RECEIVE_JOBS,
  PENDING_JOBS,
} from '../actions/action-types';

export default function jobsReducer(state = initialState, action) {
  const { jobs, status } = action;
  let newState;
  switch (action.type) {
    case FETCH_JOBS:
      console.log('FETCH_JOBS Action', action);
      return action;
    case RECEIVE_JOBS:
      console.log('RECEIVE_JOBS Action', action);
      return action;
    case PENDING_JOBS:
      console.log('PENDING_JOBS Action', action);
      newState = { jobs, status };
      return newState;
    default:
      return state;
  }
}

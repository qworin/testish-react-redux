import initialState from './initial-state';
import {
  FETCH_JOBS,
  RECEIVE_JOBS,
  PENDING_JOBS,
} from '../actions/action-types';
import { STATUS } from '../constants';

export default function jobsReducer(state = initialState, action) {
  const { jobs, status } = action;
  const currentJobs = state.jobs;
  let newState;
  let allJobs;
  switch (action.type) {
    case FETCH_JOBS:
      console.log('FETCH_JOBS Action', action);
      return action;
    case RECEIVE_JOBS:
      console.log('RECEIVE_JOBS Action', action);
      return action;
    case PENDING_JOBS:
      console.log('PENDING_JOBS Action', action);
      allJobs = status !== STATUS.PENDING ? [...currentJobs, ...jobs] : jobs;
      newState = { status, jobs: allJobs };
      return newState;
    default:
      return state;
  }
}

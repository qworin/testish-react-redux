import * as types from './action-types';
import initialState from '../reducers/initial-state';
import STATUS from '../constants';

const url = () => {
  const corsPrefix = 'https://cors-anywhere.herokuapp.com/'; // kinda dev hack
  const jobsUrl = 'https://jobs.github.com/positions.json';
  return corsPrefix + jobsUrl + '?';
};

const parametrize = (
  parameters = { search: '', location: '', fullTime: 'off', page: 1 },
) => {
  const result = new URLSearchParams();
  result.set('search', parameters.search || '');
  result.set('location', parameters.location || '');
  result.set('full_time', parameters.fullTime || 'off');
  result.set('page', parameters.page || 1);
  return result.toString();
};

export function pendingJobs(status, jobs) {
  return {
    status,
    jobs,
    type: types.PENDING_JOBS,
  };
}

export function receiveJobs(json) {
  return pendingJobs(STATUS.COMPLETED, json);
}

export function fetchJobs(searchParameters) {
  return dispatch => {
    dispatch(pendingJobs(STATUS.PENDING, initialState.jobs));
    return fetch(url() + parametrize(searchParameters))
      .then(response => response.json())
      .then(json => dispatch(receiveJobs(json)));
  };
}

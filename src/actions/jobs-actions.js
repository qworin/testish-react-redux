import * as types from './action-types';
import initialState from '../reducers/initial-state';
import { STATUS, JOBS_API_PAGE_LIMIT } from '../constants';

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
  const status =
    json.length < JOBS_API_PAGE_LIMIT ? STATUS.DEPLETED : STATUS.COMPLETED;
  return pendingJobs(status, json);
}

export function fetchJobs(searchParameters, currentJobs = initialState.jobs) {
  return dispatch => {
    dispatch(pendingJobs(STATUS.PENDING, currentJobs));
    return fetch(url() + parametrize(searchParameters))
      .then(response => response.json())
      .then(json => dispatch(receiveJobs(json)));
  };
}

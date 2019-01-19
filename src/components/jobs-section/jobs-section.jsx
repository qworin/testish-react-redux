import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import STATUS from '../../constants';
import * as jobsActions from '../../actions/jobs-actions';
import JobSearchForm from '../job-search-form/job-search-form';
import JobItem from '../job-item/job-item';
import List from '../common/list';
import style from './jobs-section.scss';

class JobsSection extends React.Component {
  static propTypes = {
    jobsActionsProp: PropTypes.object,
    jobs: PropTypes.array,
    status: PropTypes.symbol,
  };

  queryHeader = '';

  setQueryHeader = q => {
    let result = '';
    if (q.search) {
      result += ' for ' + q.search;
    }
    if (q.location) {
      result += ' at ' + q.location;
    }
    if (q.fullTime === 'on') {
      result += ', full time only';
    }
    this.queryHeader = result ? 'Search jobs' + result : 'Search all jobs';
  };

  handleSearch = (
    requestParameters = {
      search: '',
      location: '',
      fullTime: 'off',
    },
  ) => {
    this.setQueryHeader(requestParameters);
    const { jobsActionsProp } = this.props;
    return jobsActionsProp.fetchJobs(requestParameters); // trigger action
  };

  renderQueryHeader = () => {
    if (this.queryHeader) {
      return <p className={style['query-header']}>{this.queryHeader}</p>;
    }
    return '';
  };

  renderJobs = () => {
    const { jobs, status } = this.props;
    if (jobs.length) {
      return <List items={jobs} itemElement={JobItem} />;
    }
    if (!jobs.length && status === STATUS.COMPLETED) {
      return <p className={style['no-results']}>No jobs found</p>;
    }
    return '';
  };

  render() {
    return (
      <div className={style.jobs}>
        <JobSearchForm onHandleSubmit={this.handleSearch} />
        {this.renderQueryHeader()}
        {this.renderJobs()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { jobs, status } = state.jobsReducer;
  return { jobs, status };
};
const mapDispatchToProps = dispatch => ({
  jobsActionsProp: bindActionCreators(jobsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JobsSection);

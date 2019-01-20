import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { STATUS } from '../../constants';
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

  componentDidMount() {
    window.onscroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;
      if (window.innerHeight + scrollTop === offsetHeight) {
        this.handleInfiniteScroll();
      }
    };
  }

  searchParameters = {};

  queryHeader = '';

  page = 1;

  hasMoreResults = true;

  handleSearch = (
    requestParameters = {
      search: '',
      location: '',
      fullTime: 'off',
    },
  ) => {
    this.setQueryHeader(requestParameters);
    this.requestParameters = requestParameters;
    this.page = 1;
    this.hasMoreResults = true;
    const { jobsActionsProp } = this.props;
    return jobsActionsProp.fetchJobs(requestParameters);
  };

  handleInfiniteScroll = () => {
    console.log('To infinity and beyond!');
    const { jobs, jobsActionsProp, status } = this.props;
    this.hasMoreResults = status !== STATUS.DEPLETED;
    if (this.hasMoreResults) {
      this.page += 1;
      const requestParameters = { ...this.requestParameters, page: this.page };
      return jobsActionsProp.fetchJobs(requestParameters, jobs);
    }
    return null;
  };

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

  renderQueryHeader = () => {
    if (this.queryHeader) {
      return <p className={style['query-header']}>{this.queryHeader}</p>;
    }
    return '';
  };

  renderSpinner = () => {
    const { status } = this.props;
    if (status === STATUS.PENDING && this.hasMoreResults) {
      return <div className={style.spinner} />;
    }
    return '';
  };

  renderJobs = () => {
    const { jobs } = this.props;
    if (jobs.length) {
      return <List items={jobs} itemElement={JobItem} />;
    }
    return '';
  };

  renderResults = () => {
    const { jobs, status } = this.props;
    let results = '';
    if (!jobs.length && status === STATUS.COMPLETED) {
      results = 'No jobs found';
    } else if (jobs.length && status === STATUS.DEPLETED) {
      results = `${jobs.length} jobs found in total`; // TODO: single item case
    }
    return <p className={style.results}>{results}</p>;
  };

  render() {
    return (
      <div className={style.jobs}>
        <JobSearchForm onHandleSubmit={this.handleSearch} />
        {this.renderQueryHeader()}
        {this.renderJobs()}
        {this.renderResults()}
        {this.renderSpinner()}
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

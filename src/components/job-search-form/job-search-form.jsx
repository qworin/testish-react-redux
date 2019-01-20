import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { STATUS } from '../../constants';
import Input from '../common/input';
import SubmitButton from '../common/submit-button';
import style from './job-search-form.scss';

class JobSearchForm extends React.Component {
  static propTypes = {
    onHandleSubmit: PropTypes.func,
    isLoadingData: PropTypes.bool,
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const requestParameters = {
      search: form.search.value,
      location: form.location.value,
      fullTime: form.fullTime.checked ? 'on' : 'off',
    };
    const { onHandleSubmit } = this.props;
    onHandleSubmit(requestParameters);
  };

  render() {
    const { isLoadingData } = this.props;
    const searchAtts = {
      name: 'search',
      title: 'Job Description',
      placeholder: 'Filter by title, keywords',
    };
    const locationAtts = {
      name: 'location',
      title: 'Location',
      placeholder: 'Filter by city, state, zip code',
    };
    const fullTimeAtts = {
      type: 'checkbox',
      name: 'fullTime',
      title: 'Full Time Only',
    };
    return (
      <form onSubmit={this.handleSubmit} className={style['job-search-form']}>
        <Input {...searchAtts} />
        <Input {...locationAtts} />
        <Input {...fullTimeAtts} />
        <SubmitButton showSpinner={isLoadingData} />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingData: state.jobsReducer.status === STATUS.PENDING,
});

export default connect(mapStateToProps)(JobSearchForm);

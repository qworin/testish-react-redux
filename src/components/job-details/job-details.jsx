import React from 'react';
import PropTypes from 'prop-types';
import style from './job-details.scss';

const JobDetails = ({ job }) => (
  <div className={style['job-details']}>
    <h2>{job.title}</h2>
    <p>Under construction</p>
  </div>
);

JobDetails.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    url: PropTypes.string,
    created_at: PropTypes.string,
    company: PropTypes.string,
    company_url: PropTypes.string,
    location: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    how_to_apply: PropTypes.string,
    company_logo: PropTypes.string,
  }),
};

export default JobDetails;

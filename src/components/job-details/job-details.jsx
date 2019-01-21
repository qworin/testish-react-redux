import React from 'react';
import PropTypes from 'prop-types';
import style from './job-details.scss';

const JobDetails = ({ job }) => (
  <div className={style['job-details']}>
    <span className={style.badge}>
      {job.type}
      {job.location && ' @ ' + job.location}
    </span>
    <h1>{job.title}</h1>
    <aside>
      <a href={job.company_url}>
        <img alt={job.company} src={job.company_logo} />
      </a>
      <div dangerouslySetInnerHTML={{ __html: job.how_to_apply }} />
    </aside>
    <div
      className={style.description}
      dangerouslySetInnerHTML={{ __html: job.description }}
    />
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

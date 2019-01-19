import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'timeago-react';
import style from './job-item.scss';

const JobItem = ({ item }) => (
  // TODO: extract button-link to common component
  <li className={style.item}>
    <div className={style.title}>
      <button type="button" tabIndex="0" className={style['button-link']}>
        {item.title}
      </button>
    </div>
    <div>
      <a href={item.company_url} target="_blank" rel="noopener noreferrer">
        {item.company}
      </a>
    </div>
    <div className={style['pull-end']}>{item.location}</div>
    <div>{item.type}</div>
    <div className={style['pull-end']}>
      <TimeAgo datetime={item.created_at} />
    </div>
  </li>
);

JobItem.propTypes = {
  item: PropTypes.shape({
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

export default JobItem;

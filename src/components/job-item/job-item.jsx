import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'timeago-react';
import JobDetails from '../job-details/job-details';
import ButtonLink from '../common/button-link';
import Modal from '../common/modal';
import style from './job-item.scss';

class JobItem extends React.Component {
  static propTypes = {
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

  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  handleToggleModal() {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  }

  render() {
    const { showModal } = this.state;
    const { item } = this.props;
    // TODO: extract button-link to common component
    return (
      <li className={style.item}>
        <div className={style.title}>
          <ButtonLink title={item.title} onClick={this.handleToggleModal} />
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
        {showModal && (
          <Modal onClose={this.handleToggleModal}>
            <JobDetails job={item} />
          </Modal>
        )}
      </li>
    );
  }
}

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

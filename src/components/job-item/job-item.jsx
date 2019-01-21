import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import TimeAgo from 'timeago-react';
import JobDetails from '../job-details/job-details';
import Modal from '../common/modal';
import style from './job-item.scss';

class JobItem extends React.Component {
  static propTypes = {
    index: PropTypes.number,
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
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleKeyUp(e) {
    e.preventDefault();
    const { KeyEvent } = window;
    if (e.keyCode === KeyEvent.DOM_VK_RETURN) {
      this.handleToggleModal();
    } else if (e.keyCode === KeyEvent.DOM_VK_ESCAPE) {
      ReactDOM.findDOMNode(this).blur();
    }
  }

  handleFocus() {
    window.addEventListener('keyup', this.handleKeyUp, false);
  }

  handleBlur() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
  }

  handleToggleModal() {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  }

  render() {
    const { showModal } = this.state;
    const { item, index } = this.props;
    // TODO: extract button-link to common component
    return (
      <li
        className={style.item}
        onClick={this.handleToggleModal}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        tabIndex={index + 1}
      >
        <div className={style.line}>
          <span className={style.primary + ' ' + style.title}>
            {item.title}
          </span>
          <span className={style.secondary}>{item.location}</span>
        </div>
        <div className={style.line}>
          <span className={style.primary}>
            <span>{item.company}</span>
            &nbsp;&bull;&nbsp;
            <span className={style.badge}>{item.type}</span>
          </span>
          <span className={style.secondary}>
            <span className={style.badge}>
              <TimeAgo datetime={item.created_at} />
            </span>
          </span>
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

export default JobItem;

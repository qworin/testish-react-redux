import React from 'react';
import PropTypes from 'prop-types';
import style from './modal.scss';

class Modal extends React.Component {
  static propTypes = {
    onClose: PropTypes.func,
    children: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  handleKeyUp(e) {
    const { onClose } = this.props;
    const { KeyEvent } = window;
    if (e.keyCode === KeyEvent.DOM_VK_ESCAPE) {
      e.preventDefault();
      onClose();
      window.removeEventListener('keyup', this.handleKeyUp, false);
    }
  }

  handleOutsideClick(e) {
    const { onClose } = this.props;
    if (!!this.modal && !this.modal.contains(e.target)) {
      onClose();
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
  }

  render() {
    const { onClose, children } = this.props;
    const setNode = node => {
      this.modal = node;
    };
    return (
      <div className={style['modal-overlay']}>
        <div className={style.modal} ref={setNode}>
          <div className={style['modal-content']}>{children}</div>
          <button
            type="button"
            className={style['close-modal']}
            onClick={onClose}
          >
            &times;
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;

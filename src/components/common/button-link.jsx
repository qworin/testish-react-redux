import React from 'react';
import PropTypes from 'prop-types';
import style from './button-link.scss';

const ButtonLink = ({ title, onClick }) => (
  <button
    type="button"
    tabIndex="0"
    className={style['button-link']}
    onClick={onClick}
  >
    {title}
  </button>
);

ButtonLink.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ButtonLink;

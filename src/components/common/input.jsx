import React from 'react';
import PropTypes from 'prop-types';
import style from './input.scss';

const Input = ({ name, type, title, placeholder }) => (
  <div className={style['form-group']}>
    <label htmlFor={name}>
      <span className={style.label}>{title || name}</span>
      <input
        className={style.input}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        title={title || name}
      />
      <span className={type === 'checkbox' ? style.mark : ''} />
    </label>
  </div>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
};
Input.defaultProps = {
  type: 'text',
};

export default Input;

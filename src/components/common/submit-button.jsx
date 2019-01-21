import React from 'react';
import PropTypes from 'prop-types';
import style from './submit-button.scss';

const SubmitButton = ({ showSpinner }) => (
  <button
    type="submit"
    className={style['submit-button']}
    disabled={showSpinner}
  >
    Submit
  </button>
);

SubmitButton.propTypes = {
  showSpinner: PropTypes.bool,
};

export default SubmitButton;

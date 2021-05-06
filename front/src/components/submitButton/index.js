// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Component
const SubmitButton = ({buttonName}) => (
  <div className="submit">
    <button className="submit__button">{buttonName}</button>
  </div>
);

SubmitButton.propTypes = {
  buttonName: PropTypes.string
}

export default SubmitButton;

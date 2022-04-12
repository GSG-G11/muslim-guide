import React from 'react';
import PropTypes from 'prop-types';

function Button({ text, handleClick }) {
  return (
    <button type="submit" onClick={handleClick}>{text}</button>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;

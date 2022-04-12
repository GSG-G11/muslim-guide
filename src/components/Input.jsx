import React from 'react';
import PropTypes from 'prop-types';

function Input({
  placeHolder, handleInputChange, value, name,
}) {
  return (
    <input
      type="text"
      placeholder={placeHolder}
      onChange={handleInputChange}
      value={value}
      name={name}
      required
    />
  );
}

Input.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;

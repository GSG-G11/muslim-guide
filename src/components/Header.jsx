import React from 'react';
import PropTypes from 'prop-types';
import { BackArrow } from '.';
import './styles/Header.css';

function Header({ children }) {
  return (
    <header>
      <BackArrow />
      {children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Header;

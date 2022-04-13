import React from 'react';
import PropTypes from 'prop-types';
import BackArrow from './BackArrow';
import './styles/Header.css';

function Header({ children }) {
  return (
    <header className="header">
      <BackArrow />
      {children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Header;

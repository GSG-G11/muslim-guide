import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function AzkarCategory({ pathUrl, altText, title }) {
  const navigate = useNavigate();

  return (
    <button className="category-card" onClick={() => navigate('/azkar')} type="button">
      <img src={pathUrl} alt={altText} className="category-image" />
      <p className="category-name">{title}</p>
    </button>
  );
}

AzkarCategory.propTypes = {
  pathUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default AzkarCategory;

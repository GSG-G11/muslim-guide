import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function AzkarCard({ category, color }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`${category}`)}
      type="button"
      className="azkar-card"
      style={{ background: color }}
    >
      {category}
    </button>
  );
}

AzkarCard.propTypes = {
  category: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
export default AzkarCard;

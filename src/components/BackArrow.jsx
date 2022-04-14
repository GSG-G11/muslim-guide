import React from 'react';
import './styles/BackArrow.css';
import { useNavigate } from 'react-router-dom';

function BackArrow() {
  const navigate = useNavigate();
  return (
    <button
      className="back-arrow"
      onClick={() => navigate(-1)}
      type="button"
      aria-label="back arrow button"
    />
  );
}

export default BackArrow;

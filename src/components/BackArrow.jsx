/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './styles/BackArrow.css';
import { useNavigate } from 'react-router-dom';

function BackArrow() {
  const navigate = useNavigate();
  return <div className="back-arrow" onClick={() => navigate(-1)} />;
}

export default BackArrow;

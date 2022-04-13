/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import { Container } from '../../components';
import colors from '../../colors.json';

import './Azkar.css';

function Azkar({ getAzkar }) {
  const navigate = useNavigate();
  const input = useRef();
  const [azkar, setAzkar] = useState([]);
  const [filteredAzkar, setFilteredAzkar] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAzkar = async () => {
      const azkarUrl = 'https://raw.githubusercontent.com/osamayy/azkar-db/master/azkar.json';
      const { data } = await axios(azkarUrl);

      setAzkar(data);
      setFilteredAzkar(data);
      getAzkar(data);
    };

    fetchAzkar().catch(() => setError('oops,something went wrong, please try again later!!'));
  }, []);

  if (error) return <div className="errorMsg">{error}</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchedZekr = input.current.value.trim().split('');
    if (searchedZekr[0] === 'ا' && searchedZekr[1] !== 'ل') {
      searchedZekr[0] = 'أ';
    }
    setFilteredAzkar(azkar.filter(({ category }) => category.includes(searchedZekr.join(''))));
  };

  return (
    <>
      <Header>اذكار المسلم</Header>

      <form className="searchAzkarForm" onSubmit={handleSubmit}>
        <input className="searchAzkarInput" type="search" ref={input} lang="ar" placeholder="ابحث عن اﻷذكار" />
      </form>

      <div className="azkar-cards">
        <Container>
          {[...new Set(filteredAzkar.map(({ category }) => category))].map((category) => (
            <div
              onClick={() => navigate(`${category}`)}
              key={category}
              type="button"
              className="azkar-card"
              style={{ background: colors[Math.floor(Math.random() * colors.length)] }}
            >
              {category}
            </div>
          ))}
        </Container>
      </div>

      <Outlet />
    </>
  );
}

Azkar.propTypes = {
  getAzkar: PropTypes.func.isRequired,
};

export default Azkar;

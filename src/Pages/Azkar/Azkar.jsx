/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { Container } from '../../components';
import getColor from '../../utils';

import './Azkar.css';

function Azkar({ getAzkar }) {
  const navigate = useNavigate();

  const [azkar, setAzkar] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAzkar = async () => {
      const { data } = await axios(
        'https://raw.githubusercontent.com/osamayy/azkar-db/master/azkar.json',
      );
      setAzkar(data);
      getAzkar(data);
    };

    fetchAzkar().catch(() => setError('oops,something went wrong, please try again later!!'));
  }, []);

  if (error) {
    return <div className="errorMsg">{error}</div>;
  }

  return (
    <>
      <Header>اذكار المسلم</Header>
      <div className="azkar-cards">
        <Container>
          {[...new Set(azkar.map(({ category }) => category))].map((category) => (
            <div
              onClick={() => navigate(`${category}`)}
              key={category}
              id={category}
              type="button"
              className="azkar-card"
              style={{ background: getColor() }}
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

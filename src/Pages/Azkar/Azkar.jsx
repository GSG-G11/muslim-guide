import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../components/Header';
import { Container } from '../../components';
import getColor from '../../utils';

import './Azkar.css';

function Azkar() {
  const [azkar, setAzkar] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAzkar = async () => {
      const { data } = await axios(
        'https://raw.githubusercontent.com/osamayy/azkar-db/master/azkar.json',
      );
      setAzkar(data);
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
            <div key={category} className="azkar-card" style={{ background: getColor() }}>
              {category}
            </div>
          ))}
        </Container>
      </div>
    </>
  );
}

export default Azkar;

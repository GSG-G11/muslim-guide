import React from 'react';
import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { Container } from '../../components';

import './Zekr.css';

function Zekr({ azkar }) {
  const { category } = useParams();

  const selectedAzkar = azkar.filter((zekr) => zekr.category === category);

  return (
    <>
      <Header>أذكار الصباح</Header>
      <div className="zekr-cards">
        <Container>
          {selectedAzkar.map(({ count, description, zekr }, i) => (
            <div key={zekr} className="zekr-card">
              <span className="number">
                (
                {i + 1}
                )
              </span>
              <p className="zekr-text">{zekr}</p>
              <div className="description">{description}</div>
              <div className="repeat">
                <span className="repeat-count">{count || 1}</span>
                <span>:عدد مرات التكرار</span>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </>
  );
}

Zekr.propTypes = {
  azkar: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      count: PropTypes.string.isRequired,
      description: PropTypes.string,
      zekr: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Zekr;

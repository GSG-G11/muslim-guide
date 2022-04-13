import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import './Zekr.css';
import { Container } from '../../components';

function Zekr({ azkar }) {
  const selectedAzkar = azkar.filter(({ category }) => category === 'أذكار الصباح');

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
                <span className="repeat-count">{count}</span>
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

import React from 'react';

import PropTypes from 'prop-types';

function ZekrCard({ azkar }) {
  return (
    <>
      {azkar.map(({ count, description, zekr }, i) => (
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
    </>
  );
}
ZekrCard.propTypes = {
  azkar: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      zekr: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default ZekrCard;

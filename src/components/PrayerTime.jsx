import PropTypes from 'prop-types';
import React from 'react';

function PrayerTime({ className, prayerName, time }) {
  return (
    <div className={`prayer-name-time ${className} `}>
      <span className="prayer-time">{time}</span>
      <span className="prayer-name">{prayerName}</span>
    </div>
  );
}
PrayerTime.propTypes = {
  className: PropTypes.string.isRequired,
  prayerName: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PrayerTime;

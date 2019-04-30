import React from 'react';
import PropTypes from 'prop-types';

const Timer = ({ timer }) => (
  <div>
    <p>{timer}</p>
  </div>
);

Timer.propTypes = {
  timer: PropTypes.string.isRequired,
};

export default Timer;

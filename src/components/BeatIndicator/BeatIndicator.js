/**
 * Created by Daniel Vu on 7/2/2017.
 */

import React from 'react';
import './BeatIndicator.css';

const BeatIndicator = ({active}) => {
  const activeClass =  active ? 'beat-indicator-active': '';
  return <div className={`beat-indicator ${activeClass}`}>&nbsp;</div>
};

export default BeatIndicator;

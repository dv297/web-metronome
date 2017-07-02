/**
 * Created by Daniel Vu on 7/2/2017.
 */

import React from 'react';
import { connect } from 'react-redux';

import { BeatIndicator } from '../'
import './BeatList.css';

const BeatList = ({ pulses }) => {
  return (
    <div className="beat-list">
      { pulses.map((pulse, index) => <BeatIndicator key={index} active={pulse.isActive} />)}
    </div>
  );
};

export default connect(mapStateToProps)(BeatList);

function mapStateToProps(state) {
  return {
    pulses: state.pulses,
  };
}


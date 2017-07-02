/**
 * Created by Daniel Vu on 7/2/2017.
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actionCreators } from '../../ducks/index';

const ToggleMetronomeButton = ({ isPlaying, actions }) => {
  return (
    <button onClick={actions.toggleMetronome}>{isPlaying ? 'Stop' : 'Start'}</button>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleMetronomeButton);

function mapStateToProps(state) {
  return {
    isPlaying: state.isPlaying,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  }
}
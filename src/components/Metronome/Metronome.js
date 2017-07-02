/**
 * Created by Daniel Vu on 7/2/2017.
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  ToggleMetronomeButton,
  BeatList,
  TempoInput,
} from '../';

import { actionCreators } from '../../ducks/metronome_duck';
import calculateBPMToMS from '../../utilities/bpm_calculator';

class Metronome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intervalID: 0,
    };

    this.progressMetronome = this.progressMetronome.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isPlaying !== this.props.isPlaying || this.props.desiredBPM !== nextProps.desiredBPM) {
      if (nextProps.isPlaying) {
        if (this.props.desiredBPM !== nextProps.desiredBPM) {
          clearInterval(this.state.intervalID);
        }

        this.setState({
          intervalID: setInterval(() => {
            this.progressMetronome()
          }, calculateBPMToMS(this.props.desiredBPM)),
        });
      } else {
        clearInterval(this.state.intervalID);
      }
    }
  }

  progressMetronome() {
    this.props.actions.progressMetronome();
  }

  render() {
    return (
      <div>
        <ToggleMetronomeButton />
        <BeatList />
        <TempoInput />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Metronome);

function mapStateToProps(state) {
  return {
    isPlaying: state.isPlaying,
    desiredBPM: state.desiredBPM,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}
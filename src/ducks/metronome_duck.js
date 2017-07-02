/**
 * Created by Daniel Vu on 7/2/2017.
 */

import initialState from '../store/initial_state';

const TOGGLE_METRONOME = 'TOGGLE_METRONOME';
const PROGRESS_METRONOME = 'PROGRESS_METRONOME';
const SET_DESIRED_BPM = 'SET_DESIRED_BPM';

const toggleMetronome = () => ({
  type: TOGGLE_METRONOME,
});

const progressMetronome = () => ({
  type: PROGRESS_METRONOME,
});

const setDesiredBPM = (desiredBPM) => ({
  type: SET_DESIRED_BPM,
  desiredBPM,
});

const actionCreators = {
  toggleMetronome,
  progressMetronome,
  setDesiredBPM,
};


function reducer(state = initialState, action = {}) {
  switch(action.type) {
    case TOGGLE_METRONOME:
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    case PROGRESS_METRONOME:
      return {
        ...state,
        pulses: progressPulse(state.pulses),
      };
    case SET_DESIRED_BPM:
      return {
        ...state,
        desiredBPM: action.desiredBPM,
      };
    default:
      return state;
  }
}

export default reducer;

export { actionCreators };

function progressPulse(pulses) {
  let currentlyActivePulseIndex = pulses.findIndex(pulse => pulse.isActive);
  let nextActivePulseIndex = currentlyActivePulseIndex + 1 === pulses.length ? 0 : currentlyActivePulseIndex + 1;

  return pulses.map((pulse, index) => {
    if (index !== nextActivePulseIndex) {
      return {
        ...pulse,
        isActive: false,
      };
    }

    return {
      ...pulse,
      isActive: true,
    }
  });
}
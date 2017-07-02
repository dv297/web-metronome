/**
 * Created by Daniel Vu on 7/2/2017.
 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actionCreators } from '../../ducks';

class TempoInput extends Component {
  constructor(props) {
    super(props);

    this.changeBPM = this.changeBPM.bind(this);
  }

  changeBPM(event) {
    const desiredBPM = event.target.value;
    this.props.actions.setDesiredBPM(desiredBPM);
  }

  render() {
    const { desiredBPM } = this.props;
    return (<input type="number" min="1" value={desiredBPM} onChange={this.changeBPM} />)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TempoInput);

function mapStateToProps(state) {
  return {
    desiredBPM: state.desiredBPM,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

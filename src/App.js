import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { Metronome } from './components';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Metronome />
      </Provider>
    );
  }
}

export default App;

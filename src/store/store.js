/**
 * Created by Daniel Vu on 7/2/2017.
 */

import { createStore } from 'redux';
import initialState from './initial_state';
import { MetronomeDuck } from '../ducks';

const store = createStore(MetronomeDuck, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

import { combineReducers } from 'redux';
import count from './count';
import name from './name';
import campaigns from './campaigns';
// let initialState = {};

// let rootReducer = (state = initialState, action) => ({
  // count: count(state.count, action),
  // name: name(state.name, action)
// });

let rootReducer = combineReducers({
  count,
  name,
  campaigns
});

export default rootReducer;

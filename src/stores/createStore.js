import { createStore } from 'redux';
// let createStore = reducer => {
  // let state;
  // let callbacks = [];

  // let store = {
    // getState: function() {
      // return state;
    // },

    // dispatch: function(action) {
      // state = reducer(state, action);
      // callbacks.forEach(callback => callback());
    // },

    // subscribe: function(callback) {
      // callbacks = [...callbacks, callback];
    // }

  // };

  // let emptyAction = { type: "@@REDUX/INIT" };
  // store.dispatch(emptyAction);

  // return store;
// };

export default createStore;

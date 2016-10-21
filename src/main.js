import createStore from './stores/createStore';
import { addOne, addNumber } from './reducers/count';
import { setName } from './reducers/name';
import {
  campaignRequest,
  campaignRequestSuccess,
  campaignRequestFailure,
} from './reducers/campaigns';
import rootReducer from './reducers';

let writeToDocument = state => {
  let stateJson = JSON.stringify(state, null, 2);
  document.body.innerHTML = `<code>${stateJson}</code>`;
};

let store = createStore(rootReducer);
let callback = () => writeToDocument(store.getState());
store.subscribe(callback);

let initialState = store.getState();
writeToDocument(initialState);

store.dispatch(addOne());
store.dispatch(addNumber(2));
store.dispatch(setName('Margaret'));

store.dispatch(campaignRequest());
let data = {
  campaigns: [
    {
      id: 1,
      name: 'a'
    },
    {
      id: 2,
      name: 'b'
    }
  ]
};
store.dispatch(campaignRequestSuccess(data));
// store.dispatch(campaignRequestFailure());

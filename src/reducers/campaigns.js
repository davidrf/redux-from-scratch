import { combineReducers } from 'redux';
const CAMPAIGN_REQUEST = "CAMPAIGN_REQUEST";
const CAMPAIGN_REQUEST_SUCCESS = "CAMPAIGN_REQUEST_SUCCESS";
const CAMPAIGN_REQUEST_FAILURE = "CAMPAIGN_REQUEST_FAILURE";

export const campaignRequest = () => ({ type: CAMPAIGN_REQUEST });
export const campaignRequestSuccess = data => ({
  type: CAMPAIGN_REQUEST_SUCCESS,
  data
});
export const campaignRequestFailure = () => ({
  type: CAMPAIGN_REQUEST_FAILURE
});

let initialState = {
  byId: {},
  indexIds: [],
  isFetching: false
};

// let campaigns = (state = initialState, action) => {
  // switch(action.type) {
    // case CAMPAIGN_REQUEST:
      // let nextState = Object.assign({}, state, {
        // isFetching: true
      // });
      // return nextState;
    // case CAMPAIGN_REQUEST_SUCCESS:
      // campaigns = action.data.campaigns;
      // let campaignsById = campaigns.reduce((previousValue, currentValue) => {
        // previousValue[currentValue.id] = currentValue;
        // return previousValue;
      // }, {});
      // let nextById = Object.assign({}, state.byId, campaignsById);
      // let nextIndexIds = campaigns.map(campaign => campaign.id);
      // return Object.assign({}, state, {
        // byId: nextById,
        // indexIds: nextIndexIds,
        // isFetching: false
      // });
    // case CAMPAIGN_REQUEST_FAILURE:
      // let nextState = Object.assign({}, state, {
        // isFetching: false
      // });
      // return nextState;
    // default:
      // return state;
  // }
// };

// export default campaigns;

let byId = (state = initialState.byId, action) => {
  switch(action.type) {
    case CAMPAIGN_REQUEST_SUCCESS:
      let campaignsById = action.data.campaigns.reduce((previousValue, currentValue) => {
        previousValue[currentValue.id] = currentValue;
        return previousValue;
      }, {});
      return Object.assign({}, campaignsById, state);
    default:
      return state;
  }
};

let indexIds = (state = initialState.indexIds, action) => {
  switch(action.type) {
    case CAMPAIGN_REQUEST_SUCCESS:
      return action.data.campaigns.map(campaign => campaign.id);
    default:
      return state;
  }
};

let isFetching = (state = initialState.isFetching, action) => {
  switch(action.type) {
    case CAMPAIGN_REQUEST:
      return true;
    case CAMPAIGN_REQUEST_SUCCESS:
    case CAMPAIGN_REQUEST_FAILURE:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  indexIds,
  isFetching
});

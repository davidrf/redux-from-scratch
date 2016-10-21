const SET_NAME = "SET_NAME";
export const setName = data => ({
  type: SET_NAME,
  data: data
});

let initialState = '';

let name = (state = initialState, action) => {
  switch(action.type) {
    case SET_NAME:
      return action.data;
    default:
      return state;
  }
};

export default name;

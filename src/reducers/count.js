const ADD_ONE = "ADD_ONE";
const ADD_NUMBER = "ADD_NUMBER";
export const addOne = () => ({ type: ADD_ONE });
export const addNumber = data => ({
  type: ADD_NUMBER,
  data: data
});

let initialState = 0;

let count = (state = initialState, action) => {
  let nextCount;
  switch(action.type) {
    case ADD_NUMBER:
      nextCount = state + action.data;
      return nextCount;
    case ADD_ONE:
      nextCount = state + 1;
      return nextCount;
    default:
      return state;
  }
};

export default count;

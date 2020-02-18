// Reducers: transform states inside Redux store
// 1st arg: initial value of Redux store variables that will be changed by actions
// 2nd arg: the action itself

// Redux store has an initial state = 0
// then based on the type of actions, change state according to actions
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;

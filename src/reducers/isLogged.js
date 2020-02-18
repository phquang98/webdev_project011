// Reducers: transform states inside Redux store
// 1st arg: initial value of Redux store variables that will be changed by actions
// 2nd arg: the action itself

// Redux store has an initial state is false
// then based on the type of actions, change state according to actions
const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;

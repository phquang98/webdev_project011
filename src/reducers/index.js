// This is combination file
// Usually we had lots of reducers, we should grab all and put it in 1 file for ez handling
import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import sayMyNameReducer from "./sayMyName";
import { combineReducers } from "redux"; // use to combine all the reducer

// Combine 2 reducers in counter.js and isLogged.js
const allReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  sayNameThisAppearsInReduxDevtools: sayMyNameReducer
});

// // 2nd way of combining reducers with ES6 syntax
// const allReducer = combineReducers({
//   counterReducer, loggedReducer
// });
// // same as this (allReducer is an obj with 2 props, name is counterReducer and loggedReducer, and the reducer we import also name counterReducer and loggedReducer)
// const allReducer = combineReducers({
//   counterReducer: counterReducer,
//   loggedReducer: loggedReducer
// });

export default allReducer;

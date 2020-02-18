import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux"; // connect our global state store to the entire app

import "./index.css";
import App from "./App";
import allReducer from "./reducers"; // this take file index.js auto by Webpack
// import allReducer from "./reducers/index"; // same as above, but we use Webpack -> it auto sees any files named index.js -> dont need the /index part in the link

// Create a store with args so that Redux devtool can recognise
// notices we use combined reducer as args when create the store
const myStore = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Wrap app inside Provider compo -> everywhere in App get access to Redux store
ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

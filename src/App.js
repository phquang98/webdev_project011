import React from "react";
// 1st is for taking state from Redux store
// 2nd is for binding actions to be execute
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, sayMyName } from "./actions"; // must be same name as export as this is des ass
import "./App.css";

// This compo is using the Redux store by accessing states inside Redux store
function App() {
  // Getting states from Redux store
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const initialName = useSelector(
    state => state.sayNameThisAppearsInReduxDevtools.nameHere
  );
  const dispatch = useDispatch(); // use like this to write anon func

  return (
    <div className="App">
      <p>Welcome home, {initialName}</p>
      <p>Hello, counter: {counter}</p>
      <p>Valueable: {isLogged.toString()}</p>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(10))}>-</button>
      <button
        onClick={() => dispatch(sayMyName({ nameHere: "Quang", age: 25 }))}
      >
        Click me to change name
      </button>
    </div>
  );
}

export default App;

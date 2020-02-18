// Actions: desribe what we wanna do to Redux store
// Write as a func and returns an obj

// Remember when import must have the same name as export here

export const increment = num => {
  return {
    type: "INCREMENT",
    payload: num
  };
};

export const decrement = num => {
  return {
    type: "DECREMENT",
    payload: num
  };
};

export const sayMyName = (nameHere, age) => {
  return {
    type: "TALKING",
    payload: { nameHere, age }
  };
};

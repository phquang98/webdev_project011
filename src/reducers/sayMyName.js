const sayMyNameReducer = (state = { nameHere: "Anon", age: 20 }, action) => {
  switch (action.type) {
    case "TALKING":
      return action.payload.nameHere;
    default:
      return state;
  }
};

export default sayMyNameReducer;

// tourReducer.js
const initialState = {
  tours: [],
};

const tourReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOURS":
      return {
        ...state,
        tours: action.payload,
      };
    default:
      return state;
  }
};

export default tourReducer;

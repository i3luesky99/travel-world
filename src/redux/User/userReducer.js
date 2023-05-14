const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "GET_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

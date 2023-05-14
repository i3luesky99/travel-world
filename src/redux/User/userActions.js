import axios from "axios";

const getUserRequest = () => ({
  type: "GET_USER_REQUEST",
});

const getUserSuccess = (user) => ({
  type: "GET_USER_SUCCESS",
  payload: user,
});

const getUserFailure = (error) => ({
  type: "GET_USER_FAILURE",
  payload: error,
});

export const getUser = (id) => {
  return (dispatch) => {
    dispatch(getUserRequest());
    axios
      .get(`/api/get-all-users?id=${id}`)
      .then((response) => {
        dispatch(getUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getUserFailure(error.message));
      });
  };
};

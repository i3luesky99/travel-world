import axios from "../axios";
const handleCreateUserApi = (data) => {
  return axios.post("/api/create-new-user", data);
};

const handleGetUserById = (id) => {
  return axios.get(`/api/get-all-users?id=${id}`);
};
export { handleCreateUserApi, handleGetUserById };

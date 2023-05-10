import axios from "../axios";
const handleCreateUserApi = (data) => {
  return axios.post("/api/create-new-user", data);
};

export { handleCreateUserApi };

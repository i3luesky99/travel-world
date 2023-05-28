import axios from "../axios";
const handleCreateUserApi = (data) => {
  return axios.post("/api/create-new-user", data);
};
const handleCreateUserByPhoneApi = (data) => {
  return axios.post("/api/user/create/phone", data);
};
const handleGetUserById = (id) => {
  return axios.get(`/api/get-all-users?id=${id}`);
};

const handleGetUserByPhone = (phone) => {
  return axios.get("/api/user/search/phone", {
    params: {
      phone: phone,
    },
  });
};
const handleGetUserByEmail = (email) => {
  return axios.get("/api/user/search/email", {
    params: {
      email: email,
    },
  });
};

const handleAllGetUser = () => {
  return axios.get("/api/get-all-users?id=ALL");
};

const handleDeleteUserById = (id) => {
  return axios.delete("/api/delete-user", {
    data: {
      id: id,
    },
  });
};
export {
  handleCreateUserApi,
  handleGetUserById,
  handleGetUserByPhone,
  handleGetUserByEmail,
  handleCreateUserByPhoneApi,
  handleAllGetUser,
  handleDeleteUserById,
};

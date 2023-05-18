import axios from "../axios";
const handleLoginApi = (email, password) => {
  return axios.post("/api/login", { email, password });
};
const handleLoginByPhoneApi = (phoneNumber, password) => {
  return axios.post("/api/login/phone", { phoneNumber, password });
};
export { handleLoginApi, handleLoginByPhoneApi };

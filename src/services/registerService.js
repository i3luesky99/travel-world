import axios from "../axios";
const handleRegisterApi = (data) => {
  return axios.post("/api/regisUserOtp", data);
};
export { handleRegisterApi };

import axios from "../axios";
const getStatistic = (data) => {
  return axios.post("/statistics", data);
};
export { getStatistic };

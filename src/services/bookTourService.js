import axios from "../axios";
const handleGetAllBookTour = () => {
  return axios.get("/api/get-all-bookTour");
};
export { handleGetAllBookTour };

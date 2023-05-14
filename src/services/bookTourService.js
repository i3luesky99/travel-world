import axios from "../axios";
const handleCreateBookTour = (data) => {
  return axios.post("/api/create-new-bookTour", data);
};
const handleGetAllBookTour = () => {
  return axios.post("/api/get-all-bookTour?id=ALL");
};
export { handleCreateBookTour, handleGetAllBookTour };

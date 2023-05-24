import axios from "../axios";
const handleCreateBookTour = (data) => {
  return axios.post("/api/bookTour/book", data);
};
const handleGetAllBookTour = () => {
  return axios.get("/api/get-all-bookTour?id=ALL");
};
const handleGetBookTourByCustomerId = (id) => {
  return axios.get("/api/bookTour/get-by-customerId", {
    params: {
      customerId: id,
    },
  });
};

const handleGetBookTourById = (id) => {
  return axios.get("/api/bookTour/get-by-tourId?", {
    params: {
      tourId: id,
    },
  });
};
const handleCancellationBookTourAPI = (data) => {
  return axios.put("/api/bookTour/cancellation", data);
};
export {
  handleCreateBookTour,
  handleGetAllBookTour,
  handleGetBookTourByCustomerId,
  handleCancellationBookTourAPI,
  handleGetBookTourById,
};

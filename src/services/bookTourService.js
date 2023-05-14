import axios from "../axios";
const handleCreateBookTour = (data) => {
    return axios.post("/api/bookTour/book", data);
};
export { handleCreateBookTour };
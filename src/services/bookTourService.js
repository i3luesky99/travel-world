import axios from "../axios";
const handleCreateBookTour = (data) => {
    return axios.post("/api/create-new-bookTour", data);
};
export { handleCreateBookTour };
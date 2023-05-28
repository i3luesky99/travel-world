import axios from "../axios";
const handleSendMailBookTourAPI = (data) => {
    return axios.post("/api/send-mail/bookTour", data);
};

export { handleSendMailBookTourAPI };
import axios from "../axios";
const handleSendMailBookTourAPI = (data) => {
    return axios.post("/api/send-mail/bookTour", data);
};
const handleSendMailBookTourByMoneyAPI = (data) => {
    return axios.post("/api/send-mail/bookTourByMoney", data);
};
export { handleSendMailBookTourAPI, handleSendMailBookTourByMoneyAPI };
import axios from "../axios";
const handleCreateBillAPI = (data) => {
    return axios.post("/api/create-new-bill", data);
};

export { handleCreateBillAPI };
import axios from "../axios";
const handleCreateBillAPI = (data) => {
    return axios.post("/api/create-new-bill", data);
};

const handleGetBillAPI = (id) => {
    return axios.get("/api/get-all-bill", {
        params: {
            id: id,
        },
    });
};
export { handleCreateBillAPI, handleGetBillAPI };
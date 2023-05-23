import axios from "../axios";
const handleCreateFavoriteTourAPI = (data) => {
    return axios.post("/api/favorite-tour/create", data);
};
const handleDeleteFavoriteTourAPI = (data) => {
    return axios.delete("/api/favorite-tour/delete", {
        data
    });
};
const handleGetFavoriteTour = (id) => {
    return axios.get("/api/favorite-tour/get-by-customerId", {
        params: {
            customerId: id,
        },
    });
};
export { handleCreateFavoriteTourAPI, handleDeleteFavoriteTourAPI, handleGetFavoriteTour };
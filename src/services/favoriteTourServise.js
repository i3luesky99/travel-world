import axios from "../axios";
const handleCreateFavoriteTourAPI = (data) => {
    return axios.post("/api/favorite-tour/create", data);
};
const handleDeleteFavoriteTourAPI = (data) => {
    return axios.delete("/api/favorite-tour/delete", {
        data
    });
};
export { handleCreateFavoriteTourAPI, handleDeleteFavoriteTourAPI };
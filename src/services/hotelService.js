import axios from '../axios';
const handleGetHotelApi = (id) => {
    return axios.get('/api/get-all-hotel?id=' + id);
}
export {

    handleGetHotelApi
}
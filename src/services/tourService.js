import axios from '../axios';
const handleGetTourByRegion = (region) => {
    return axios.get('/api/get-tour-region', {
        params: {
            region: region
        }
    });
}
const handleGetTourByContinent = (continent) => {
    return axios.get('/api/get-tour-continent', {
        params: {
            continent: continent
        }
    });
}
const handleGetTourById = (id) => {
    return axios.get('/api/get-all-tour', {
        params: {
            id: id
        }
    });
}
export {
    handleGetTourByRegion,
    handleGetTourById,
    handleGetTourByContinent
}
import axios from '../axios';
const handleGetDestination = (region) => {
    return new Promise((resolve, reject) => {

        try {
            const result = axios.post('/api/get-region-destination', {
                params: {
                    region: region
                }
            }).then((response) => {
                resolve(response.data);
            });
        } catch (error) {
            reject(error);
        }
    })
}
export {
    handleGetDestination
}
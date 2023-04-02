import axios from '../axios';
const handleOtpApi = (data) => {
    return axios.post('/api/verifyOtp', data);
}

export {
    handleOtpApi
}
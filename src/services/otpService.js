import axios from "../axios";
const handleOtpApi = (data) => {
  return axios.post("/api/verifyOtp", data);
};
const handlePhoneOtpApi = (data) => {
  return axios.post("/api/send-otp-phone", data);
}
const handleVerifyPhoneOtpApi = (data) => {
  return axios.post("/api/verify-otp-phone", data);
}
const handleEmailOtpApi = (data) => {
  return axios.post("/api/create-otp", data);
}
export { handleOtpApi, handlePhoneOtpApi, handleVerifyPhoneOtpApi, handleEmailOtpApi };

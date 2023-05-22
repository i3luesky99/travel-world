import axios from "../axios";
const handleStripe = (data) => {
    return axios.post("/create_payment_stripe", data);
};
export { handleStripe };
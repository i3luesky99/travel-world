import axios from "../axios";
const handleVNPay = (data) => {
    return axios.post("/create_payment_url", data);
};
export { handleVNPay };
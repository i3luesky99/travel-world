import axios from "../axios";
const handleVNPay = (data) => {
    return axios.get("http://localhost:8888/order/create_payment_url", data);
};
export { handleVNPay };
import { useState } from "react";

function Payment() {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleInputChange = (event) => {
    setPaymentInfo({
      ...paymentInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("123123");
    // Here you can implement your payment logic using the paymentInfo state
  };

  return (
    <div className="payment-page">
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="optionPayment">
          <label htmlFor="cardNumber">Họ và tên:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="optionPayment">
          <label htmlFor="cardNumber">Email:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="optionPayment">
          <label htmlFor="cardNumber">Số điện thoại:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="optionPayment">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="optionPayment">
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            value={paymentInfo.expirationDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="optionPayment">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={paymentInfo.cvv}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;

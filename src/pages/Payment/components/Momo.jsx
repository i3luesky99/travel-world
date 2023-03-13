import React from "react";

export default function Momo(props) {
  const { paymentInfo, handleInputChange } = props;
  return (
    <>
      <div className="optionPayment">
        <label>Số thẻ :</label>
        <input
          type="text"
          name="cardNumber"
          value={paymentInfo.cardNumber}
          onChange={handleInputChange}
        />
      </div>
      <div className="optionPayment">
        <label htmlFor="cvv">Loại thẻ :</label>
      </div>
      <div className="optionPayment">
        <label>Ngày hết hạn :</label>
        <input
          type="text"
          name="expirationDate"
          value={paymentInfo.expirationDate}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}

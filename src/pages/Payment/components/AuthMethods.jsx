import React, { useState } from "react";

export default function AuthMethods(props) {
  const { paymentInfo, handleInputChange } = props;
  const [selectedOption, setSelectedOption] = useState("Số diện thoại");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <p className="title">Hình thức xác thực</p>
      <div className="info">
        <div className="optionSelect">
          <label>
            <input
              type="radio"
              value="Số diện thoại"
              checked={selectedOption === "Số diện thoại"}
              onChange={handleOptionChange}
            />
            <p>Số điện thoại</p>
          </label>
        </div>
        <div className="optionSelect">
          <label>
            <input
              type="radio"
              value="Email"
              checked={selectedOption === "Email"}
              onChange={handleOptionChange}
            />
            <p>Email</p>
          </label>
        </div>
      </div>
      <div className="info">
        {selectedOption === "Email" ? (
          <div className="optionPayment">
            <label>Nhập email :</label>
            <input
              type="text"
              name="email"
              value={paymentInfo.email}
              onChange={handleInputChange}
            />
          </div>
        ) : (
          <div className="optionPayment">
            <label>Nhập số điện thoại :</label>
            <input
              type="text"
              name="phone"
              value={paymentInfo.phone}
              onChange={handleInputChange}
            />
          </div>
        )}
        <div className="optionPayment">
          <label>Nhận mã OTP </label>
        </div>
        <div className="optionPayment">
          <label>Nhập OTP Code :</label>
          <input
            type="text"
            name="email"
            value={paymentInfo.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </>
  );
}

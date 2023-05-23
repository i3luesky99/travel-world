import React from "react";
import { BsBank2, BsCashStack } from "react-icons/bs";

export default function PaymentMethod(props) {
  const { selectedOption, setSelectedOption } = props;
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <p className="title">PHƯƠNG THỨC THANH TOÁN</p>
      <div className="info" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        <div className="optionSelect">
          <label>
            <input
              type="radio"
              value="Tiền mặt"
              checked={selectedOption === "Tiền mặt"}
              onChange={handleOptionChange}
            />
            <p>Tiền mặt</p>
            <BsCashStack className="icon" />
          </label>
        </div>
        <div className="optionSelect">
          <label>
            <input
              type="radio"
              value="VNPay"
              checked={selectedOption === "VNPay"}
              onChange={handleOptionChange}
            />
            <p>VNPay</p>
            <img
              src={require("../../../assets/picture/vnpay1.png")}
              alt=""
              style={{ scale: "0.5" }}
            />
          </label>
        </div>
        <div className="optionSelect ">
          <label>
            <input
              type="radio"
              value="visa"
              checked={selectedOption === "visa"}
              onChange={handleOptionChange}
            />
            <p>Thẻ visa</p>
            <BsBank2 className="icon" />
          </label>
        </div>
      </div>
    </>
  );
}

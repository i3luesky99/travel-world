import React from "react";
import MenuDialog from "../../../components/MenuDialog/MenuDialog";

export default function InternetBanking(props) {
  const banks = [
    {
      name: "Ngân hàng ACB ",
      icon: require("../../../assets/picture/logo-acb.png"),
    },
    {
      name: "Ngân hàng Techcombank ",
      icon: require("../../../assets/picture/logo-techcombank.png"),
    },
    {
      name: "Ngân hàng MB ",
      icon: require("../../../assets/picture/logo-mbbank.png"),
    },
    {
      name: "Ngân hàng Agribank ",
      icon: require("../../../assets/picture/logo-agribank.png"),
    },
    {
      name: "Ngân hàng VietinBank ",
      icon: require("../../../assets/picture/logo-vietinbank.png"),
    },
    {
      name: "Ngân hàng Vietcombank ",
      icon: require("../../../assets/picture/logo-vietcombank.png"),
    },
  ];
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
        <MenuDialog banks={banks} />
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

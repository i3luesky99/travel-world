import React from "react";

export default function Momo(props) {
  const { paymentInfo, handleInputChange } = props;
  return (
    <div className="momo">
      <label>Trả qua số điện thoại: 0906624069</label>
      <div className="QRCode flex">
        <p>Hoặc</p>
        <label>Quét mã QR</label>
        <img src={require("../../../assets/picture/momoQR.jpg")} alt="" />
      </div>
    </div>
  );
}

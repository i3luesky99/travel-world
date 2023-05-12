import React from "react";

export default function GuestContact(props) {
  const {
    paymentInfo,
    handleInputChange,
    adult,
    setAdult,
    kids,
    setKids,
    baby,
    setBaby,
  } = props;
  return (
    <>
      <p className="title">THÔNG TIN LIÊN HỆ</p>
      <div className="info">
        <div className="optionPayment">
          <label>Họ và tên :</label>
          <input
            type="text"
            name="name"
            value={paymentInfo.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="optionPayment">
          <label>Người lớn :</label>
          <input
            type="number"
            min={1}
            value={adult}
            onChange={(e) => setAdult(e.target.value)}
          />
        </div>
        <div className="optionPayment">
          <label htmlFor="cvv">Trẻ em :</label>
          <input
            type="number"
            min={0}
            value={kids}
            onChange={(e) => setKids(e.target.value)}
          />
        </div>
        <div className="optionPayment">
          <label htmlFor="cvv">Sơ sinh :</label>
          <input
            type="number"
            min={0}
            value={baby}
            onChange={(e) => setBaby(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

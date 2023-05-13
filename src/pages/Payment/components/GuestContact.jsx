import React, { Children } from "react";

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
    totalSlot,
  } = props;
  const handleOnChange = (e, name) => {
    let value = e.target.value;
    console.log(totalSlot)
    if (name !== 'baby') {
      if (name === 'adult') {
        if (totalSlot < (parseInt(kids ? kids : 0) + parseInt(value))) {
          alert('Vượt quá số chỗ còn lại');
        } else {
          setAdult(value);
        }
      } else {
        if (totalSlot < (parseInt(adult ? adult : 0) + parseInt(value))) {
          alert('Vượt quá số chỗ còn lại');
        } else {
          setKids(value);
        }
      }
    } else {
      if (value > 2) {
        alert('Số trẻ sơ sinh không được lớn hơn 2 !');
      } else {
        setBaby(value);
      }
    }

  }
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
            max={totalSlot}
            value={adult}
            onChange={(e) => handleOnChange(e, 'adult')}
          />
        </div>
        <div className="optionPayment">
          <label htmlFor="cvv">Trẻ em :</label>
          <input
            type="number"
            min={0}

            value={kids}
            onChange={(e) => handleOnChange(e, 'kids')}
          />
        </div>
        <div className="optionPayment">
          <label htmlFor="cvv">Sơ sinh :</label>
          <input
            type="number"
            min={0}

            value={baby}
            onChange={(e) => handleOnChange(e, 'baby')}
          />
        </div>
      </div>
    </>
  );
}

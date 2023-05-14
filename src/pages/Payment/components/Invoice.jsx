import React, { useRef, useState } from "react";
import { formatCurrency } from "../../../theme/functions";
import { useReactToPrint } from "react-to-print";
import { iconPrintBlue } from "../../../theme/icon";

const Invoice = (props) => {
  const { total, paymentInfo, totalSlot, tour, adult, kids, baby } = props;
  const componentPDF = useRef();
  const [open, setOpen] = useState(true);
  const handelToPDF = useReactToPrint({
    content: () => componentPDF.current,
    onAfterPrint: () => {
      setOpen(true);
    },
    onBeforeGetContent: async () => {
      setOpen(false);
    },
  });

  return (
    <div
      className="invoice-container"
      ref={componentPDF}
      style={{ border: !open && "none" }}
    >
      {open && (
        <img
          src={iconPrintBlue}
          alt=""
          className="icon"
          onClick={handelToPDF}
        />
      )}
      <h2>Hóa đơn</h2>
      <div className="details-container">
        <div className="details-row">
          <p className="details-label">Tên khách hàng:</p>
          <p className="details-value">{paymentInfo?.name}</p>
        </div>
        <div className="details-row">
          <p className="details-label">Mã chuyến đi:</p>
          <p className="details-value">{tour.id}</p>
        </div>
        <div className="details-row">
          <p className="details-label">Chuyến đi:</p>
          <p className="details-value">{tour.nameTour}</p>
        </div>
        <div className="details-row">
          <p className="details-label">Tổng số đặt chỗ người lớn:</p>
          <p className="details-value">{adult}</p>
        </div>
        <div className="details-row">
          <p className="details-label">Tổng số đặt chỗ trẻ em:</p>
          <p className="details-value">{kids}</p>
        </div>
        <div className="details-row">
          <p className="details-label">Tổng số đặt chỗ trẻ sơ sinh:</p>
          <p className="details-value">{baby}</p>
        </div>
        <div className="details-row">
          <p className="details-label">Nơi xuất phát:</p>
          <p className="details-value">{tour.placeGo}</p>
        </div>
        <div className="details-row">
          <p className="details-label">Nơi đến:</p>
          <p className="details-value">{tour.placeDest}</p>
        </div>
        <div className="details-row">
          <p className="details-label">Ngày xuất phát:</p>
          <p className="details-value">{tour.dateGo}</p>
        </div>
        <div className="details-row">
          <p className="details-label">Tổng tiền:</p>
          <p className="details-value">{formatCurrency(total)}</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;

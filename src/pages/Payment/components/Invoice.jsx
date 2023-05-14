import React, { useRef, useState } from "react";
import { formatCurrency } from "../../../theme/functions";
import { useReactToPrint } from "react-to-print";
import { iconPrintBlue } from "../../../theme/icon";

const Invoice = (props) => {
  const { total, paymentInfo, totalSlot, tour } = props;
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
          <p className="details-label">Tổng số đặt chỗ:</p>
          <p className="details-value">{totalSlot}</p>
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

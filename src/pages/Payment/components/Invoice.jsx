import React from "react";
import { formatCurrency } from "../../../theme/functions";

const Invoice = (props) => {
  const { total, paymentInfo, totalSlot, tour } = props;
  console.log(tour)
  return (
    <div className="invoice-container">
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

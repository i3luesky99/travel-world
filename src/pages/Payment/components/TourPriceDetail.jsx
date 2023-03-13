import React from "react";
import { formatCurrency } from "../../../theme/functions";

export default function TourPriceDetail(props) {
  const { adultPrice, kidPrice, babyPrice } = props;
  const babyText = "Sơ sinh(< 2 tuổi)";

  return (
    <div className="tourDetail">
      <p className="title">BẢNG GIÁ TOUR CHI TIẾT</p>
      <table>
        <thead className="topTable">
          <tr>
            <td>Loại giá\Độ tuổi</td>
            <td>Người lớn(Trên 11 tuổi)</td>
            <td>Trẻ em(2 - 11 tuổi)</td>
            <td>{babyText}</td>
          </tr>
        </thead>
        <tbody className="botTable">
          <tr>
            <td>Giá</td>
            <td>{formatCurrency(adultPrice)}</td>
            <td>{formatCurrency(kidPrice)}</td>
            <td>{formatCurrency(babyPrice)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

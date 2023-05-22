import React, { useRef, useState } from "react";
import { formatCurrency } from "../../../theme/functions";
import { useReactToPrint } from "react-to-print";
import { iconPrintBlue } from "../../../theme/icon";
import Print from "../../../assets/svg/print";

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

  const headerTable = {
    id: "Mã tour",
    dateGo: "Điểm đến",
    dateBack: "Ngày đi",
    book: "",
    slot: "Số chỗ đặt",
    price: "Đơn giá",
  };

  const headerArr = Object.values(headerTable);
  return (
    <div className="invoice-main">
      <div
        className="invoice-container"
        ref={componentPDF}
        style={{ border: !open && "none" }}
      >
        {/* <h2>Hóa đơn</h2>
      <div className="details-container">
        <div className="details-row">
          <p className="details-label">Tên khách hàng:</p>
          <p className="details-value">{paymentInfo?.name}</p>
        </div>
        <div className="details-row">
          <p className="details-label">Mã chuyến đi:</p>
          <p className="details-value">{tour?.id}</p>
        </div>
        <div className="details-row">
          <p className="details-label">Chuyến đi:</p>
          <p className="details-value">{tour?.nameTour}</p>
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
          <p className="details-value">{tour?.placeGo}</p>
        </div>
        <div className="details-row">
          <p className="details-label">Nơi đến:</p>
          <p className="details-value">{tour?.placeDest}</p>
        </div>
        <div className="details-row">
          <p className="details-label">Ngày xuất phát:</p>
          <p className="details-value">{tour?.dateGo}</p>
        </div>
        <div className="details-row">
          <p className="details-label">Tổng tiền:</p>
          <p className="details-value">{formatCurrency(total)}</p>
        </div>
      </div> */}
        <div className="invoice-header">HOÁ ĐƠN ĐIỆN TỬ</div>
        <div className="invoice-content">
          <div className="logo">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className="title-invoice">Công ty</div>
              <div>Địa chỉ: 96 đường số 2 phường 13, quận Gò Vấp</div>
              Thành phố: Hồ Chí Minh
              <div style={{ color: "#a1a19f" }}>Quốc gia: Việt Nam</div>
            </div>
            <div className="company-name">LEVART</div>
          </div>
          <div className="customer">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className="customer-title">Hoá đơn của: Anh A</div>
              <div>Địa chỉ: 96 đường số 2 phường 13, quận Gò Vấp</div>
              <div>Số điện thoại: 0906624069</div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "#43474a",
                fontSize: "15px",
              }}
            >
              <div>Mã hoá đơn: 1233</div>
            </div>
          </div>
          <div className="invoice-tour">
            <table className="base-table">
              <thead style={{ backgroundColor: "#666666" }}>
                <tr>
                  {headerArr.map((headerValue, index) => (
                    <th style={{ color: "white" }} key={`${index}-header`}>
                      {headerValue}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>101</td>
                  <td>Đà Lạt</td>
                  <td>22/04/2023</td>
                  <td></td>
                  <td>{30}</td>
                  <td>10000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="total">
            <div className="total-prices">
              <div>TỔNG CỘNG:</div>
              <div>{formatCurrency(30000000)}</div>
            </div>
          </div>
          {open && (
            <div className="icon">
              <Print
                style={{ width: "35px", height: "35px", cursor: "pointer" }}
                fill={"#43474a"}
              />
              <div>In hoá đơn</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Invoice;

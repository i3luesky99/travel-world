import React, { useRef, useState, useEffect } from "react";
import { formatCurrency } from "../../../theme/functions";
import { useReactToPrint } from "react-to-print";
import Print from "../../../assets/svg/print";
import { useParams } from "react-router-dom";
import moment from 'moment';
import { handleGetBookTourByTourId } from "../../../services/bookTourService";
import { handleGetUserById } from "../../../services/userService";
import { handleScheduleDay } from "../../../theme/functions";
import { handleGetTourById } from "../../../services/tourService";
import { handleGetBillAPI } from "../../../services/billService";


const Invoice = () => {
  const [bill, setBill] = useState();
  const [bookTour, setBookTour] = useState();
  const [customer, setCustomer] = useState();
  const [tour, setTour] = useState();
  const [kid, setKid] = useState(0);
  const [adult, setAdult] = useState(0);
  const [baby, setBaby] = useState(0);
  const { invoiceId } = useParams();
  const totalBookTour = adult * tour?.adultPrice ? tour?.adultPrice : 0 + kid * tour?.childPrice ? tour?.childPrice : 0 + baby * tour?.babyPrice ? tour?.babyPrice : 0;
  const componentPDF = useRef();
  const [open, setOpen] = useState(true);
  const currentDate = moment(tour?.dateGo, 'DD/MM/YYYY');
  const previousDate = currentDate.subtract(3, 'days');

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
    tourName: "Độ tuổi",
    dateGo: "",
    dateBack: "",
    slot: "Số lượng",
    price: "Đơn giá",
  };
  const fetchBill = async () => {
    let dataBillApi = await handleGetBillAPI(invoiceId);
    if (dataBillApi.errCode === 0) {

      setBill(dataBillApi.bill);
      let dataBookTourApi = await handleGetBookTourByTourId(dataBillApi.bill.bookTourId);
      setBookTour(dataBookTourApi.bookTour);
      let dataCustomerApi = await handleGetUserById(dataBookTourApi.bookTour.customerId);
      setCustomer(dataCustomerApi.user);
      console.log(dataCustomerApi.user);
      let dataTourApi = await handleGetTourById(dataBookTourApi.bookTour.tourId);
      setTour(dataTourApi.tour);

      setAdult(dataBookTourApi.bookTour.adultSlot ? dataBookTourApi.bookTour.adultSlot : 0);
      setKid(dataBookTourApi.bookTour.childrenSlot ? dataBookTourApi.bookTour.childrenSlot : 0);
      setBaby(dataBookTourApi.bookTour.babySlot ? dataBookTourApi.bookTour.babySlot : 0);
    } else {
      alert('bill không hợp lệ!');
    }
  }
  useEffect(() => {
    fetchBill();
  }, [])
  const headerArr = Object.values(headerTable);
  return (
    <div className="invoice-main" ref={componentPDF}>
      <div className="invoice-container" style={{ border: !open && "none" }}>
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
              <div className="customer-title">
                Hoá đơn của: {customer?.fullName}
              </div>
              <div>Email: {customer?.email}</div>
              <div>Số điện thoại: {customer?.phoneNumber}</div>

              <div>*Lưu ý quý khách nên chụp lại hoặc in hóa đơn để tiện lợi cho việc thanh toán sau này.</div>
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
              <div>Mã hoá đơn: {bill?.id}</div>
            </div>
          </div>
          <div className="customer">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className="customer-title">Thông tin của tour:</div>
              <div>Tên tour: {tour?.nameTour}</div>
              <div>Thời gian:{handleScheduleDay(tour?.dateGo, tour?.dateBack)} ngày {handleScheduleDay(tour?.dateGo, tour?.dateBack) - 1} đêm   </div>
              <div>Nơi khởi hành: {tour?.placeGo}  |        Nơi đến: {tour?.placeDest}</div>
              <div>Ngày đi: {tour?.dateGo}     |     Ngày về: {tour?.dateBack}</div>
              {/* 3 ngày 2 đêm */}
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
                  <td>Người lớn (trên 11 tuổi)</td>
                  <td></td>
                  <td></td>
                  <td>{adult}</td>
                  <td>{formatCurrency(tour?.adultPrice)}</td>
                </tr>
                <tr>
                  <td>Trẻ em (2 - 11 tuổi)</td>
                  <td></td>
                  <td></td>
                  <td>{kid}</td>
                  <td>{formatCurrency(tour?.childPrice)}</td>
                </tr>
                <tr>
                  <td>{`Sơ sinh (< 2 tuổi)`}</td>
                  <td></td>
                  <td></td>
                  <td>{baby}</td>
                  <td>{formatCurrency(tour?.babyPrice)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="total">
            <div className="total-prices">
              <div>TỔNG CỘNG:</div>
              <div>{formatCurrency(bookTour?.adultSlot * tour?.adultPrice + bookTour?.childrenSlot * tour?.childPrice + bookTour?.babySlot * tour?.babyPrice)}</div>
            </div>
          </div>
          {open && (
            <div className="icon" onClick={handelToPDF}>
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

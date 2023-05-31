import React, { useState } from "react";
import { Popup } from "../../../components";
import { formatCurrency } from "../../../theme/functions";
import "../../../assets/scss/components/loading.scss";
import { handleDeleteTourById } from "../../../services/tourService";
import { handleConfirmPaymentAPI } from "../../../services/bookTourService";
export default function BaseTable(props) {
  const headerTable = {
    delete: "",
    id: "Mã tour",
    location: "Địa điểm",
    // img: "Bộ sưu tập",
    adultSlot: "Số chỗ còn",
    dateGo: "Ngày đi",
    dateBack: "Ngày về",
    price: "Giá gốc",
    detail: "Chi tiết",
  };

  const headerBookTour = {
    state: "Tình trạng thanh toán",
    id: "Mã đặt tour",
    placeDest: "Điểm đến",
    customerId: "Tên khách hàng đã đặt",
    payment: "Phương thức thanh toán",
    adultSlot: "Chỗ người lớn",
    childrenSlot: "Chỗ trẻ em",
    babySlot: "Chỗ em bé",
  };

  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const headerArr = Object.values(headerTable);
  const headerBooking = Object.values(headerBookTour);
  const { tours, fetchTour, selection } = props;

  const handleOpenDialog = async (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const deleteTour = async () => {
    try {
      await handleDeleteTourById(selectedId);
      fetchTour();
    } catch (error) {
      return error;
    }
  };

  const handleToTouDetail = (id) => {
    window.location.replace(`/admin/tour-detail/${id}`);
  };

  const handleCancelPayment = async () => {
    const data = {
      confirm: "cancel",
      id: selectedId,
      creatorId: 2,
    };
    try {
      await handleConfirmPaymentAPI(data);
      fetchTour();
    } catch (error) {
      return;
    }
  };

  const handleAcceptPayment = async () => {
    const data = {
      confirm: "success",
      id: selectedId,
      creatorId: 2,
    };
    try {
      await handleConfirmPaymentAPI(data);
      fetchTour();
    } catch (error) {
      return error;
    }
  };

  const handleClose = () => {
    if (selection !== "list") {
      fetchTour();
    } else {
      handleCancelPayment();
    }
    setOpen(false);
  };

  const handleAccept = () => {
    if (selection === "list") {
      deleteTour();
    } else {
      handleAcceptPayment();
    }
    setOpen(false);
  };

  const title =
    selection === "list"
      ? "Bạn có chắc muốn xóa Tour này không ?"
      : "Xác nhận thanh toán hóa đơn cho khách hàng ?";

  const propsPopup = {
    open: open,
    title: title,
    handleClose: handleClose,
    handleAccept: handleAccept,
    setOpen: setOpen,
  };

  return (
    <div className="table-container">
      {selection === "list" ? (
        <table className="base-table">
          <thead>
            <tr>
              {headerArr.map((headerValue, index) => (
                <th key={`${index}-header`}>{headerValue}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tours?.map((destination, index) => (
              <tr key={`${index}-destination`}>
                <td>
                  <img
                    src={require("../../../assets/picture/icon/delete.png")}
                    alt=""
                    className="icon"
                    onClick={() => handleOpenDialog(destination?.id)}
                  />
                </td>
                <td>{destination?.id}</td>
                <td>{destination?.placeDest}</td>
                <td>
                  {/* <img className="collection" src={destination?.img[0]} alt="" /> */}
                  {destination.adultSlot}
                </td>
                <td>{destination?.dateGo || "11/11/2022"}</td>
                <td>{destination?.dateBack || "22/11/2022"}</td>
                <td>{formatCurrency(destination?.adultPrice)}</td>
                <td
                  onClick={() => handleToTouDetail(destination?.id)}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    borderBottom: "none",
                  }}
                >
                  <div className="button" style={{ width: "120px" }}>
                    Xem chi tiết
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <table className="base-table">
            <thead>
              <tr>
                {headerBooking.map((headerValue, index) => (
                  <th key={`${index}-header`}>{headerValue}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tours?.map((destination, index) => (
                <tr key={`${index}-destination`}>
                  <td>
                    {destination?.state === "S3" && <div>Đã thanh toán</div>}
                    {destination?.state === "S1" && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          borderBottom: "none",
                        }}
                        onClick={() => handleOpenDialog(destination?.id)}
                      >
                        <div className="button" style={{ width: "120px" }}>
                          Xác nhận
                        </div>
                      </div>
                    )}
                    {destination?.state === "S4" && <div>Hủy thanh toán</div>}
                  </td>
                  <td>{destination?.id}</td>
                  <td
                    style={{
                      maxWidth: "120px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {destination?.dataTour?.placeDest}
                  </td>
                  <td>{destination?.dataCustomer?.fullName}</td>
                  <td>
                    {destination?.paymentId === "P3" && <div>Tiền mặt</div>}
                    {destination?.paymentId === "P6" && <div>VnPay</div>}
                    {destination?.paymentId === "P7" && <div>Visa</div>}
                  </td>
                  <td>{destination?.adultSlot}</td>
                  <td>{destination?.childrenSlot}</td>
                  <td>{destination?.babySlot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      <Popup {...propsPopup} />
      {/* {isLoading && <Loading />} */}
    </div>
  );
}

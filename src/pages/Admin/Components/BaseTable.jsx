import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { Popup } from "../../../components";
import Loading from "../../../components/Loading/Loading";
import { formatCurrency } from "../../../theme/functions";
import "../../../assets/scss/components/loading.scss";
import useModel from "../../../hook/useModel";
import {
  handleDeleteTourById,
  handleGetAllTour,
} from "../../../services/tourService";
import BookingTable from "./BookingTable";
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
    id: "Mã tour",
    customerId: "Mã khách hàng đã đặt",
    payment: "Phương thức thanh toán",
    state: "Tình trạng thanh toán",
    adultSlot: "Chỗ người lớn",
    childrenSlot: "Chỗ trẻ em",
    babySlot: "Chỗ em bé",
  };

  const [open, setOpen] = useState(false);
  const [isAccept, setIsAccept] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const headerArr = Object.values(headerTable);
  const headerBooking = Object.values(headerBookTour);
  const { tours, fetchTour, selection } = props;

  const handleOpenDialog = async (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const deleteTour = async () => {
    await handleDeleteTourById(selectedId);
    fetchTour();
  };

  const handleToTouDetail = (id) => {
    window.location.replace(`/admin/tour-detail/${id}`);
  };

  useEffect(() => {
    if (isAccept) {
      deleteTour();
      setIsAccept(false);
    }
  }, [isAccept]);

  const propsPopup = {
    open: open,
    setOpen: setOpen,
    isDelete: isAccept,
    setIsAccept: setIsAccept,
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
                  <td>{destination?.tourId}</td>
                  <td>
                    <BookingTable tourId={destination?.tourId} idCus={true} />
                  </td>
                  <td>
                    <BookingTable tourId={destination?.tourId} payment={true} />
                  </td>
                  <td>
                    <BookingTable tourId={destination?.tourId} state={true} />
                  </td>
                  <td>
                    <BookingTable tourId={destination?.tourId} adult={true} />
                  </td>
                  <td>
                    <BookingTable
                      tourId={destination?.tourId}
                      children={true}
                    />
                  </td>
                  <td>
                    <BookingTable tourId={destination?.tourId} baby={true} />
                  </td>
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

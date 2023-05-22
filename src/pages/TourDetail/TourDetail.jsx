import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { formatCurrency, handleScheduleDay } from "../../theme/functions";

import { handleGetTourById } from "../../services/tourService";
import {
  iconInfo,
  iconMap,
  iconLocation,
  iconPaperClip,
  iconNoteColor,
  iconSchedule,
  iconPrint,
} from "../../theme/icon";

import { note, service } from "../../theme/data";
import { useReactToPrint } from "react-to-print";
import Heart from "../../assets/svg/heart";

const TourDetail = () => {
  const [tour, setTour] = useState({});
  const [isService, setIsService] = useState(false);
  const [isNote, setIsNote] = useState(false);
  const { tourId } = useParams();
  const componentPDF = useRef();
  const fetchTour = async () => {
    try {
      const data = await handleGetTourById(tourId);
      const tourData = data.tour;

      setTour(tourData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnClickBookNow = () => {
    window.location.replace("/payment/" + tour.id);
  };
  const handleOpenService = () => {
    setIsService(!isService);
  };

  const handleOpenNote = () => {
    setIsNote(!isNote);
  };

  const handleCreateFavoriteTour = () => {
    window.location.replace("/tour-country/tour-detail/" + tourId);
  };

  useEffect(() => {
    fetchTour();
  }, []);

  const headerTable = {
    id: "Mã tour",
    dateGo: "Ngày đi",
    dateBack: "Ngày về",
    price: "Giá từ",
    slot: "Số chỗ",
    book: "Đặt chỗ",
  };
  const headerArr = Object.values(headerTable);

  const price = formatCurrency(tour.adultPrice);
  const daysDetail = tour.tourDetailData;
  const handelToPDF = useReactToPrint({
    content: () => componentPDF.current,
    onAfterPrint: () => {
      setIsService(false);
      setIsNote(false);
    },
    onBeforeGetContent: async () => {
      setIsService(true);
      setIsNote(true);
    },
  });

  return (
    <div>
      <div className="tour-detail" ref={componentPDF}>
        <div className="title">{tour.nameTour}</div>
        <div className="top-tour">
          <div className="tour-image-container">
            <img
              className="tour-image"
              src={require("../../assets/picture/brazil.jpg")}
              alt="Tour"
            />
          </div>
          <div className="top-right">
            <div className="top">
              <div className="title border">{tour.nameTour}</div>
              <div className="border data">Mã tour : {tour.id}</div>
              <div className="border data">Thời gian: {handleScheduleDay(tour.dateGo, tour.dateBack) + " ngày " + (handleScheduleDay(tour.dateGo, tour.dateBack) - 1) + " đêm"}</div>
              <div className="border data">Khởi hành: {tour.dateGo}</div>
              <div className="border data">
                Vận Chuyển: {tour.transportation}{" "}
                {/* Vận Chuyển: Xe du lịch đời mới & Máy bay khứ hồi{" "} */}
              </div>
              <div className="data">Xuất phát: {tour.placeGo}</div>
            </div>
            <div className="bottom-right">
              <div className="price-box">
                <div className="text-price">Giá chỉ từ:</div>
                <div className="price">{price}</div>
              </div>
              <div className="bottom-text">
                <div onClick={handleOnClickBookNow} className="button-left">
                  ĐẶT NGAY
                </div>
                <div onClick={handelToPDF} className="pdf">
                  CHI TIẾT
                  <img src={iconPrint} alt="" className="icon" />
                </div>
                <div className="heart-button">
                  <Heart
                    style={{ height: "35px", width: "35px" }}
                    fill={"orange"}
                    onClick={handleCreateFavoriteTour}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tour-details">
          <div className="tour-info">
            <div className="border">
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <img src={iconInfo} alt="" className="icon" />
                <h3>Điểm nhấn hành trình</h3>
              </div>
            </div>
            <div style={{ textAlign: "justify", fontStyle: "italic" }}>
              {tour.note}
            </div>
            <div className="days">
              <div className="border">
                <div style={{ display: "flex", marginBottom: "10px" }}>
                  <img src={iconMap} alt="" className="icon" />
                  <h3>Lịch trình</h3>
                </div>
              </div>
              <div className="day-detail">
                {daysDetail?.map((day, index) => (
                  <div key={`${index}-day-detail`} className="day">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div className="locale">
                        <img src={iconLocation} alt="" className="icon" />
                      </div>
                      <div className="day-title">
                        <p>NGÀY {index + 1}</p>
                        <p style={{ width: "15px" }}>|</p>
                        <div>{day.title}</div>
                      </div>
                    </div>
                    <div className="line">
                      <div className="text-line">
                        <p>{day.schedule}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="service">
            <div
              className="border"
              onClick={handleOpenService}
              style={{ cursor: "pointer" }}
            >
              <div
                style={{
                  display: "flex",
                  marginBottom: "10px",
                  alignItems: "center",
                }}
              >
                <img src={iconPaperClip} alt="" className="icon" />
                <h3>Dịch vụ bao gồm và không bao gồm </h3>(
                <p style={{ fontWeight: "600" }}>Xem thêm</p>)
              </div>
            </div>
            {isService && <div className="text">{service}</div>}
          </div>
          <div className="service">
            <div
              className="border"
              onClick={handleOpenNote}
              style={{ cursor: "pointer" }}
            >
              <div
                style={{
                  display: "flex",
                  marginBottom: "10px",
                  alignItems: "center",
                }}
              >
                <img src={iconNoteColor} alt="" className="icon" />
                <h3>GHI CHÚ </h3>(<p style={{ fontWeight: "600" }}>Xem thêm</p>)
              </div>
            </div>
            {isNote && <div className="text">{note}</div>}
          </div>
          <div className="service">
            <div className="border">
              <div
                style={{
                  display: "flex",
                  marginBottom: "10px",
                  alignItems: "center",
                }}
              >
                <img src={iconSchedule} alt="" className="icon" />
                <h3>Ngày khởi hành </h3>
              </div>
            </div>
            <table className="base-table">
              <thead>
                <tr>
                  {headerArr.map((headerValue, index) => (
                    <th key={`${index}-header`}>{headerValue}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{tour.id}</td>
                  <td>{tour.dateGo}</td>
                  <td>{tour.dateBack}</td>
                  <td>{price}</td>
                  <td>{tour.adultSlot + tour.childrenSlot}</td>
                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "none",
                    }}
                  >
                    <div className="button" onClick={handleOnClickBookNow}>
                      Đặt tour
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;

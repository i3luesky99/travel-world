import React from "react";

export default function TourInfo(props) {
  const { tour } = props;
  return (
    <>
      <p className="title">THÔNG TIN TOUR</p>
      <div
        className="info"
        style={{ gridTemplateColumns: "none", width: "100%" }}
      >
        <div
          className="optionSelect"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              lineHeight: "38px",
              whiteSpace: "break-spaces",
            }}
          >
            <p>Tên tour: {tour?.nameTour}</p>
            <p>Ngày đi: {tour?.dateGo}</p>
            <p>Ngày về: {tour?.dateBack}</p>
            <p>Điểm xuất phát: {tour?.placeGo}</p>
          </label>
          <img
            src={tour?.image || require("../../../assets/picture/danang.jpg")}
            alt=""
            style={{
              width: "400px",
              height: "200px",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </>
  );
}

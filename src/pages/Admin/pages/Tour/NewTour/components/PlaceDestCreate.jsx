import React from "react";

export default function PlaceDestCreate(props) {
  const { tour, handleChangeInput } = props;
  const destGo = ["Thành phố Hồ Chí Minh", "Hà Nội", "Đà Nẵng"];
  return (
    <div>
      Điểm đến :
      <select
        className="form-control"
        value={tour.placeDest}
        style={{ fontSize: "14px", marginTop: "10px" }}
        onChange={(e) => handleChangeInput("placeDest", e.target.value)}
      >
        {destGo.map((dest, index) => (
          <option key={`${index}-transport`}>{dest}</option>
        ))}
      </select>
    </div>
  );
}

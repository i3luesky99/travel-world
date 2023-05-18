import React from "react";

export default function PlaceGoCreate(props) {
  const { tour, handleChangeInput } = props;
  const destGo = ["Thành phố Hồ Chí Minh", "Hà Nội", "Đà Nẵng"];

  return (
    <div>
      <div>Xuất phát :</div>

      <select
        className="form-control"
        value={tour.placeGo}
        style={{ fontSize: "14px", marginTop: "10px" }}
        onChange={(e) => handleChangeInput("placeGo", e.target.value)}
      >
        {destGo.map((dest, index) => (
          <option key={`${index}-transport`}>{dest}</option>
        ))}
      </select>
    </div>
  );
}

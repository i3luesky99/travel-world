import React from "react";

export default function Transportation(props) {
  const { tour, handleChangeInput } = props;

  const transportation = [
    "Máy bay khứ hồi",
    "Xe du lịch đời mới",
    "Xe du lịch đời mới & Máy bay khứ hồi",
  ];
  return (
    <div className="border-white">
      <div>Phương tiện đưa đón:</div>
      <select
        className="form-control"
        value={tour.transportation}
        style={{ fontSize: "14px", marginTop: "10px", marginBottom: "10px" }}
        onChange={(e) => handleChangeInput("transportation", e.target.value)}
      >
        {transportation.map((transport, index) => (
          <option key={`${index}-transport`}>{transport}</option>
        ))}
      </select>
    </div>
  );
}

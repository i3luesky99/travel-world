import React from "react";

export default function TransportationCreate(props) {
  const { tour, handleChangeInput } = props;

  const transportation = [
    "Máy bay khứ hồi",
    "Xe du lịch đời mới",
    "Xe du lịch đời mới & Máy bay khứ hồi",
  ];
  return (
    <div style={{ marginTop: "10px" }}>
      <div style={{ marginBottom: "10px" }}>Phương tiện đưa đón:</div>
      <select
        className="form-control"
        value={tour.transportation}
        style={{ fontSize: "14px" }}
        onChange={(e) => handleChangeInput("transportation", e.target.value)}
      >
        {transportation.map((transport, index) => (
          <option key={`${index}-transport`}>{transport}</option>
        ))}
      </select>
    </div>
  );
}

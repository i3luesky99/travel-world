import React from "react";

export default function PlaceDestCreate(props) {
  const { tour, handleChangeInput, warning } = props;

  return (
    <div className="border-white">
      Điểm đến :
      <input
        type="text"
        className="form-control "
        value={tour.placeDest}
        style={{
          margin: "0px",
          marginTop: "10px",
          marginBottom: "10px",
          border: warning && !tour.placeDest && "1px solid #dc3545",
        }}
        onChange={(e) => handleChangeInput("placeDest", e.target.value)}
      />
    </div>
  );
}

import React from "react";

export default function TourNameCreate(props) {
  const { tour, handleChangeInput } = props;

  return (
    <div style={{ marginTop: "10px" }}>
      <div>Tên Tour :</div>
      <input
        type="text"
        className="form-control"
        value={tour.nameTour}
        style={{
          marginTop: "10px",
          marginBottom: "5px",
        }}
        onChange={(e) => handleChangeInput("nameTour", e.target.value)}
      />
    </div>
  );
}

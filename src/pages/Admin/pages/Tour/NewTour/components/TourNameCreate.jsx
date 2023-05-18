import React from "react";

export default function TourNameCreate(props) {
  const { tour, handleChangeInput, warning } = props;

  return (
    <div className="border-white">
      <div>Tên Tour :</div>
      <input
        type="text"
        className="form-control"
        value={tour.nameTour}
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          border: warning && !tour.nameTour && "1px solid #dc3545",
        }}
        onChange={(e) => handleChangeInput("nameTour", e.target.value)}
      />
    </div>
  );
}

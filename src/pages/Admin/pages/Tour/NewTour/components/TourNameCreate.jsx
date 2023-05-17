import React from "react";

export default function TourNameCreate(props) {
  const { tour, handleChangeInput } = props;

  return (
    <div>
      <div>Tên Tour :</div>
      <input
        type="text"
        className="form-control"
        value={tour.nameTour}
        style={{
          marginTop: "10px",
        }}
        onChange={(e) => handleChangeInput("nameTour", e.target.value)}
      />
    </div>
  );
}

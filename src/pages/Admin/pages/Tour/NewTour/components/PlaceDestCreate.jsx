import React from "react";

export default function PlaceDestCreate(props) {
  const { tour, handleChangeInput } = props;

  return (
    <div>
      Điểm đến :
      <input
        type="text"
        className="form-control"
        value={tour.placeDest}
        style={{
          margin: "0px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
        onChange={(e) => handleChangeInput("placeDest", e.target.value)}
      />
    </div>
  );
}

import React from "react";

export default function PlaceGoCreate(props) {
  const { tour, handleChangeInput } = props;

  return (
    <div>
      <div>Xuất phát :</div>
      <input
        type="text"
        className="form-control"
        value={tour.placeGo}
        style={{
          margin: "0px",
          marginTop: "10px",
        }}
        onChange={(e) => handleChangeInput("placeGo", e.target.value)}
      />
    </div>
  );
}

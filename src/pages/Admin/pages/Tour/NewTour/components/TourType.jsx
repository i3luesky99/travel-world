import React from "react";

export default function TourType(props) {
  const { tour, handleChangeInput } = props;
  const types = ["Trong nước", "Ngoài nước"];

  return (
    <div>
      Loại Tour :
      <select
        className="form-control"
        value={tour.tourType}
        style={{ fontSize: "14px", marginTop: "10px" }}
        onChange={(e) => handleChangeInput("tourType", e.target.value)}
      >
        {types.map((type, index) => (
          <option key={`${index}-tourType`}>{type}</option>
        ))}
      </select>
    </div>
  );
}

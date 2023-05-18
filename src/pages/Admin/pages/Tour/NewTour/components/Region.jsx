import React from "react";

export default function Region(props) {
  const { tour, handleChangeInput } = props;
  const regions = ["Miền Trung", "Miền Nam", "Miền Bắc"];
  const continents = ["Châu Á", "Châu Mỹ", "Châu Âu"];
  return (
    <div className="border-white">
      {tour.tourType === "Ngoài nước" ? (
        <>
          Châu lục :
          <select
            className="form-control"
            value={tour.continent}
            style={{
              fontSize: "14px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            onChange={(e) => handleChangeInput("continent", e.target.value)}
          >
            {continents.map((continent, index) => (
              <option key={`${index}-continent`}>{continent}</option>
            ))}
          </select>
        </>
      ) : (
        <>
          Miền :
          <select
            className="form-control"
            value={tour.region}
            style={{
              fontSize: "14px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            onChange={(e) => handleChangeInput("region", e.target.value)}
          >
            {regions.map((region, index) => (
              <option key={`${index}-continent`}>{region}</option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}

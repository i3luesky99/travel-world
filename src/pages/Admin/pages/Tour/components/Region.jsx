import React from "react";

export default function Region(props) {
  const { tour, setRegionType, regionType, continentType, setContinentType } =
    props;
  const regions = [
    { value: "Mien Bac", label: "Miền Bắc" },
    { value: "Mien Trung", label: "Miền Trung" },
    { value: "Mien Nam", label: "Miền Nam" },
  ];
  const continents = [
    { value: "Chau My", label: "Châu Mỹ" },
    { value: "Chau Au", label: "Châu Âu" },
    { value: "Chau A", label: "Châu Á" },
  ];
  const handleSelectChangeRegions = (event) => {
    setRegionType(event.target.value);
  };

  const handleSelectChangeContinent = (event) => {
    setContinentType(event.target.value);
  };

  return (
    <div className="border-white">
      {tour.tourType === "Ngoài nước" ? (
        <>
          Châu lục :
          <select
            className="form-control"
            value={continentType}
            style={{
              fontSize: "14px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            onChange={handleSelectChangeContinent}
          >
            {continents.map((continent, index) => (
              <option key={`${index}-continent`} value={continent.value}>
                {continent.label}
              </option>
            ))}
          </select>
        </>
      ) : (
        <>
          Miền :
          <select
            className="form-control"
            value={regionType}
            style={{
              fontSize: "14px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            onChange={handleSelectChangeRegions}
          >
            {regions.map((region, index) => (
              <option key={index} value={region.value}>
                {region.label}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}

import React from "react";

export default function Region(props) {
  const { tour, setDestinationId, destinationId } = props;
  const regions = [
    { value: 4, label: "Miền Bắc" },
    { value: 5, label: "Miền Trung" },
    { value: 3, label: "Miền Nam" },
  ];
  const continents = [
    { value: 6, label: "Châu Mỹ" },
    { value: 7, label: "Châu Âu" },
    { value: 8, label: "Châu Á" },
  ];

  const handleSelectChange = (event) => {
    setDestinationId(parseInt(event.target.value));
  };

  return (
    <div className="border-white">
      {tour.tourType === "Ngoài nước" ? (
        <>
          Châu lục :
          <select
            className="form-control"
            value={destinationId}
            style={{
              fontSize: "14px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            onChange={handleSelectChange}
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
            value={destinationId}
            style={{
              fontSize: "14px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            onChange={handleSelectChange}
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

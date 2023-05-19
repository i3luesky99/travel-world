import moment from "moment";
import React from "react";

export default function Date(props) {
  const { date } = props;
  const startDate = `${moment(`${date[0].startDate}`).format("L")}`;
  const endDate = `${moment(`${date[0].endDate}`).format("L")}`;
  return (
    <div className="border-white">
      <div style={{ display: "flex", marginBottom: "10px" }}>
        Ngày đi :<p>{startDate}</p>
        <p style={{ marginLeft: "10px", marginRight: "10px" }}>-</p>
        Ngày về :<p>{endDate}</p>
      </div>
    </div>
  );
}

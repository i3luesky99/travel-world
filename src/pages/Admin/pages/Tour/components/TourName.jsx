import React from "react";

export default function TourName(props) {
  const { tour, handleChangeInput, editTour, isEdit, setIsEdit } = props;
  const enableEdit = () => {
    setIsEdit({ ...isEdit, tourName: true });
  };
  return (
    <div style={{ marginTop: "10px", display: "flex", alignItems: "center" }}>
      <div style={{ whiteSpace: "nowrap", marginRight: "15px" }}>
        Tên Tour :{tour?.nameTour}
      </div>
      {isEdit.tourName && (
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
      )}
      {editTour && (
        <img
          src={require("../../../../../assets/picture/icon/pencil.png")}
          alt=""
          className="icon"
          onClick={enableEdit}
        />
      )}
    </div>
  );
}

import React from "react";
import { iconPencil } from "../../../../../../theme/icon";
import ButtonGroup from "./ButtonGroup";

export default function TourName(props) {
  const { tour, handleChangeInput, isEdit, setIsEdit } = props;
  const enableEdit = () => {
    setIsEdit({ ...isEdit, nameTour: true });
  };

  const onSave = () => {
    setIsEdit({ ...isEdit, nameTour: false });
  };

  const onCancel = () => {
    setIsEdit({ ...isEdit, nameTour: false });
  };

  const propsButton = {
    onSave: onSave,
    onCancel: onCancel,
  };
  return (
    <div style={{ marginTop: "10px" }} className="border-white">
      <div style={{ marginBottom: "15px" }}>
        <div style={{ whiteSpace: "nowrap" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ marginRight: "10px" }}>Tên Tour :</div>
              {!isEdit.nameTour && (
                <div style={{ whiteSpace: "pre" }}>{tour?.nameTour}</div>
              )}
            </div>
            {!isEdit.nameTour ? (
              <img
                src={iconPencil}
                alt=""
                className="icon"
                onClick={enableEdit}
              />
            ) : (
              <ButtonGroup {...propsButton} />
            )}
          </div>
        </div>
        {isEdit.nameTour && (
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
      </div>
    </div>
  );
}

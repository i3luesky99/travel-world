import React from "react";
import { iconPencil } from "../../../../../../theme/icon";
import ButtonGroup from "./ButtonGroup";

export default function PlaceGo(props) {
  const { tour, handleChangeInput, isEdit, setIsEdit } = props;
  const enableEdit = () => {
    setIsEdit({ ...isEdit, placeGo: true });
  };

  const onSave = () => {
    setIsEdit({ ...isEdit, placeGo: false });
  };

  const onCancel = () => {
    setIsEdit({ ...isEdit, placeGo: false });
  };
  const propsButton = {
    onSave: onSave,
    onCancel: onCancel,
  };
  return (
    <div style={{ marginTop: "10px" }} className="border-white">
      <div style={{ marginBottom: "15px" }}>
        <div style={{ whiteSpace: "nowrap " }}>
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
              <div style={{ marginRight: "10px" }}>Xuất phát :</div>
              {!isEdit.placeGo && (
                <div style={{ whiteSpace: "pre" }}>{tour?.placeGo}</div>
              )}
            </div>
            {!isEdit.placeGo ? (
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
        {isEdit.placeGo && (
          <input
            type="text"
            className="form-control"
            value={tour.placeGo}
            style={{
              marginTop: "10px",
              marginBottom: "5px",
            }}
            onChange={(e) => handleChangeInput("placeGo", e.target.value)}
          />
        )}
      </div>
    </div>
  );
}

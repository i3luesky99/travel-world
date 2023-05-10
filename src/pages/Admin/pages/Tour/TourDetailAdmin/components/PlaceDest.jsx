import React from "react";
import { iconPencil } from "../../../../../../theme/icon";
import ButtonGroup from "./ButtonGroup";

export default function PlaceDest(props) {
  const { tour, handleChangeInput, isEdit, setIsEdit } = props;
  const enableEdit = () => {
    setIsEdit({ ...isEdit, placeDest: true });
  };

  const onSave = () => {
    setIsEdit({ ...isEdit, placeDest: false });
  };

  const onCancel = () => {
    setIsEdit({ ...isEdit, placeDest: false });
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
              <div style={{ marginRight: "10px" }}>Điểm đến :</div>
              {!isEdit.placeDest && (
                <div style={{ whiteSpace: "pre" }}>{tour?.placeDest}</div>
              )}
            </div>
            {!isEdit.placeDest ? (
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
        {isEdit.placeDest && (
          <input
            type="text"
            className="form-control"
            value={tour.placeDest}
            style={{
              marginTop: "10px",
              marginBottom: "5px",
            }}
            onChange={(e) => handleChangeInput("placeDest", e.target.value)}
          />
        )}
      </div>
    </div>
  );
}

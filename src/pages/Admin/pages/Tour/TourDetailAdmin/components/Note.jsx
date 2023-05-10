import React from "react";
import { iconPencil } from "../../../../../../theme/icon";
import ButtonGroup from "./ButtonGroup";

export default function Note(props) {
  const { tour, handleChangeInput, isEdit, setIsEdit } = props;

  const enableEdit = () => {
    setIsEdit({ ...isEdit, note: true });
  };

  const onSave = () => {
    setIsEdit({ ...isEdit, note: false });
  };

  const onCancel = () => {
    setIsEdit({ ...isEdit, note: false });
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
            <div>
              <div style={{ marginRight: "10px" }}>Mô tả :</div>
              {!isEdit.note && (
                <div style={{ whiteSpace: "pre" }}>{tour?.note}</div>
              )}
            </div>
            {!isEdit.note ? (
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
        {isEdit.note && (
          <textarea
            type="text"
            className="form-control"
            value={tour.note}
            style={{
              marginTop: "10px",
              marginBottom: "5px",
            }}
            onChange={(e) => handleChangeInput("note", e.target.value)}
          />
        )}
      </div>
    </div>
  );
}

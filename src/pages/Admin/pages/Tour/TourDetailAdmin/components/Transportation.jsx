import React from "react";
import { iconPencil } from "../../../../../../theme/icon";
import ButtonGroup from "./ButtonGroup";

export default function Transportation(props) {
  const { tour, handleChangeInput, isEdit, setIsEdit } = props;

  const enableEdit = () => {
    setIsEdit({ ...isEdit, transportation: true });
  };

  const onSave = () => {
    setIsEdit({ ...isEdit, transportation: false });
  };

  const onCancel = () => {
    setIsEdit({ ...isEdit, transportation: false });
  };
  const propsButton = {
    onSave: onSave,
    onCancel: onCancel,
  };

  const transportation = [
    "Máy bay khứ hồi",
    "Xe du lịch đời mới",
    "Xe du lịch đời mới & Máy bay khứ hồi",
  ];
  return (
    <div style={{ marginTop: "10px" }} className="border-white">
      <div style={{ marginBottom: "15px" }}>
        <div style={{ whiteSpace: "nowrap", marginBottom: "10px" }}>
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
              <div style={{ marginRight: "10px" }}>Phương tiện đưa đón :</div>
              {!isEdit.transportation && (
                <div style={{ whiteSpace: "pre" }}>{tour?.transportation}</div>
              )}
            </div>
            {!isEdit.transportation ? (
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
        {isEdit.transportation && (
          <select
            className="form-control"
            value={tour.transportation}
            style={{ fontSize: "14px" }}
            onChange={(e) =>
              handleChangeInput("transportation", e.target.value)
            }
          >
            {transportation.map((transport, index) => (
              <option key={`${index}-transport`}>{transport}</option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}

import React from "react";
import { iconPencil } from "../../../../../../theme/icon";
import ButtonGroup from "./ButtonGroup";

export default function Day(props) {
  const { startDate, endDate, isEdit, setIsEdit } = props;
  const enableEdit = () => {
    setIsEdit({ ...isEdit, day: true });
  };
  const onSave = () => {
    setIsEdit({ ...isEdit, day: false });
  };

  const onCancel = () => {
    setIsEdit({ ...isEdit, day: false });
  };

  const propsButton = {
    onSave: onSave,
    onCancel: onCancel,
  };
  return (
    <div className="border-white">
      <div
        style={{
          marginBottom: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          Ngày đi :
          <p
            style={{
              marginLeft: "10px",
            }}
          >
            {startDate}
          </p>
          <p style={{ marginLeft: "10px", marginRight: "10px" }}>-</p>
          Ngày về :
          <p
            style={{
              marginLeft: "10px",
            }}
          >
            {endDate}
          </p>
        </div>
        {!isEdit.day ? (
          <img src={iconPencil} alt="" className="icon" onClick={enableEdit} />
        ) : (
          <ButtonGroup {...propsButton} />
        )}
      </div>
    </div>
  );
}

import React from "react";

export default function ButtonGroup(propsButton) {
  const { onSave, onCancel, index } = propsButton;
  return (
    <div style={{ display: "flex" }}>
      <div
        className="button"
        style={{
          width: "80px",
          marginRight: "15px",
          backgroundColor: "#e86464",
        }}
        onClick={() => onCancel(index)}
      >
        Huỷ
      </div>
      <div
        className="button"
        style={{ width: "80px" }}
        onClick={() => onSave(index)}
      >
        Lưu
      </div>
    </div>
  );
}

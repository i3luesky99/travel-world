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
          backgroundColor: "#dc3545",
        }}
        onClick={() => onCancel(index)}
      >
        Huỷ
      </div>
      <div
        className="button"
        style={{ width: "80px", background: "#56b5bb" }}
        onClick={() => onSave(index)}
      >
        Lưu
      </div>
    </div>
  );
}

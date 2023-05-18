import React from "react";

export default function NoteCreate(props) {
  const { tour, handleChangeInput, warning } = props;

  return (
    <div style={{ marginTop: "10px" }} className="border-white">
      <div>Mô tả :</div>
      <textarea
        value={tour.note}
        className="form-control"
        onChange={(e) => handleChangeInput("note", e.target.value)}
        style={{
          marginBottom: "10px",
          border: warning && !tour.note && "1px solid #dc3545",
        }}
      />
    </div>
  );
}

import React from "react";

export default function NoteCreate(props) {
  const { tour, handleChangeInput } = props;

  return (
    <div style={{ marginTop: "10px" }}>
      <div>Mô tả :</div>
      <textarea
        value={tour.note}
        className="form-control"
        onChange={(e) => handleChangeInput("note", e.target.value)}
        style={{ marginBottom: "10px" }}
      />
    </div>
  );
}

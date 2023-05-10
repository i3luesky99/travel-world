import React from "react";

export default function Content(prop) {
  const { child } = prop;
  return (
    <div className="content">
      <div className="main-content">{child}</div>
    </div>
  );
}

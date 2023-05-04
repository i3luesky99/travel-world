import { Dialog } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        background: "transparent",
      }}
    >
      <Dialog open={true}>
        <div className="loading">
          <div className="loading-spinner" />
        </div>
      </Dialog>
    </div>
  );
};

export default Loading;

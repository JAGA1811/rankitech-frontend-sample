import React from "react";

const ProgressBar = ({ progress }) => (
  <div style={{ height: 20, background: "#f0f0f0", width: "100%", marginBottom: 16 }}>
    <div
      style={{
        height: "100%",
        width: `${progress}%`,
        background: "#4caf50",
        transition: "width .3s"
      }}
    />
  </div>
);

export default ProgressBar;

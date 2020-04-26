import React from "react";

export default ({ color }) => {
  return (
    <div style={{ height: "50px", overflow: "hidden" }}>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "50px", width: "100%" }}
      >
        <path
          d="M-0.00,49.65 C177.24,11.89 269.80,121.92 506.82,30.39 L500.00,-0.00 L-0.00,-0.00 Z"
          style={{ stroke: "none", fill: color }}
        ></path>
      </svg>
    </div>
  );
};

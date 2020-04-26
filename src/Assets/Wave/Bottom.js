import React from "react";

export default ({ color }) => {
  return (
    <div style={{ height: "150px", overflow: "hidden" }}>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "50px", width: "100%" }}
      >
        <path
          d="M-0.00,49.65 C149.99,148.99 349.20,-49.65 500.00,49.65 L500.00,148.99 L-0.00,148.99 Z"
          style={{ stroke: "none", fill: color }}
        ></path>
      </svg>
    </div>
  );
};

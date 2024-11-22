import React from "react";

const LoadingSpinner: React.FC = () => (
  <div className="d-flex justify-content-center align-items-center spinner-container">
    <div
      className="spinner-border text-primary spinner-border-custom"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default LoadingSpinner;

import React from "react";

const Header: React.FC = () => (
  <h1
    className="mb-4 text-center"
    style={{
      color: "#007bff",
      fontWeight: 700,
      fontSize: "2.5rem",
    }}
  >
    <i className="bi bi-currency-exchange me-2"></i>Currency Converter
  </h1>
);

export default Header;

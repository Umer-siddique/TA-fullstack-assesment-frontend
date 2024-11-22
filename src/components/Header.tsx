import React from "react";

const Header: React.FC = () => (
  <header
    style={{
      backgroundColor: "#f8f9fa", // Light background
      padding: "1.5rem 1rem",
      borderRadius: "0.5rem",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
    }}
    className="mb-4 text-center"
  >
    <h1
      style={{
        color: "#007bff", // Primary blue text
        fontWeight: 800,
        fontSize: "2.5rem",
        margin: 0,
      }}
      className="mb-2"
    >
      <i
        className="bi bi-currency-exchange me-2"
        style={{
          color: "#28a745", // Accent green for the icon
          fontSize: "2.2rem",
        }}
      ></i>
      Currency Converter
    </h1>
    <p
      style={{
        color: "#6c757d", // Secondary muted color for the subtitle
        fontSize: "1.2rem",
      }}
      className="mb-0"
    >
      Effortlessly convert your money anytime, anywhere.
    </p>
  </header>
);

export default Header;

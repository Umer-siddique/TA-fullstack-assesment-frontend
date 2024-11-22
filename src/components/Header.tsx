import React from "react";

const Header: React.FC = () => (
  <header className="header-custom mb-4 text-center">
    <h1 className="header-title mb-2">
      <i className="bi bi-currency-exchange me-2 icon-custom"></i>
      Currency Converter
    </h1>
    <p className="header-subtitle mb-0-custom">
      Effortlessly convert your money anytime, anywhere.
    </p>
  </header>
);

export default Header;

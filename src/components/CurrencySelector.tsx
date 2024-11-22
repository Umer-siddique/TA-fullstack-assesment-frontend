import React from "react";

interface CurrencySelectorProps {
  currencies: string[];
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  currencies,
  selectedCurrency,
  onCurrencyChange,
}) => (
  <select
    className="form-select shadow-sm"
    value={selectedCurrency}
    onChange={(e) => onCurrencyChange(e.target.value)}
    style={{ fontSize: "1rem", padding: "0.75rem" }}
  >
    {currencies.map((currency) => (
      <option key={currency} value={currency}>
        {currency}
      </option>
    ))}
  </select>
);

export default CurrencySelector;

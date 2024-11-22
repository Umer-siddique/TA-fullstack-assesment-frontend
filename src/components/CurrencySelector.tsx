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
    className="form-select shadow-sm shadow-sm-custom select-custom"
    value={selectedCurrency}
    onChange={(e) => onCurrencyChange(e.target.value)}
  >
    {/* Map over currencies to display options */}
    {currencies.map((currency) => (
      <option key={currency} value={currency}>
        {currency}
      </option>
    ))}
  </select>
);

export default CurrencySelector;

import React from "react";
import CurrencySelector from "./CurrencySelector";
import { CurrencyConverterProps } from "../types/interfaces";

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
  rates,
  fromCurrency,
  setFromCurrency,
  toCurrency,
  setToCurrency,
  amount,
  setAmount,
  onConvert,
}) => (
  <>
    <div className="row mb-3">
      <div className="col">
        <CurrencySelector
          currencies={Object.keys(rates)}
          selectedCurrency={fromCurrency}
          onCurrencyChange={setFromCurrency}
        />
      </div>
      <div className="col">
        <CurrencySelector
          currencies={Object.keys(rates)}
          selectedCurrency={toCurrency}
          onCurrencyChange={setToCurrency}
        />
      </div>
    </div>
    <div className="mb-3">
      <input
        type="number"
        className="form-control shadow-sm"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        style={{ fontSize: "1rem", padding: "0.75rem" }}
        placeholder="Enter amount"
      />
    </div>
    <button
      className="btn btn-primary w-100 mb-3 d-flex align-items-center justify-content-center shadow-sm"
      onClick={onConvert}
      style={{
        fontSize: "1rem",
        padding: "0.75rem",
        fontWeight: 600,
      }}
    >
      <i className="bi bi-arrow-left-right me-2"></i>
      Convert
    </button>
  </>
);

export default CurrencyConverter;

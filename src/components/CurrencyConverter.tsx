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
      {/* Currency selection for 'from' and 'to' */}
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

    {/* Input for amount to convert */}
    <div className="mb-3">
      <input
        type="number"
        className="form-control shadow-sm shadow-sm-custom input-custom"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        placeholder="Enter amount"
      />
    </div>

    {/* Button to trigger conversion */}
    <button
      className="btn btn-primary w-100-custom mb-3 d-flex align-items-center justify-content-center shadow-sm-custom py-2"
      onClick={onConvert}
    >
      <i className="bi bi-arrow-left-right me-2"></i>
      Convert
    </button>
  </>
);

export default CurrencyConverter;

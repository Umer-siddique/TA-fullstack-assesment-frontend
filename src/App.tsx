import React, { useState } from "react";
import useRates from "./hooks/useRates";
import { ConversionRecord } from "./types/interfaces";
import {
  ConversionHistory,
  ConversionResult,
  CurrencyConverter,
  Header,
  LoadingSpinner,
} from "./components";

const App: React.FC = () => {
  const { rates, loading, error } = useRates();
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [amount, setAmount] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [records, setRecords] = useState<ConversionRecord[]>(() => {
    const savedRecords = localStorage.getItem("conversionRecords");
    return savedRecords ? JSON.parse(savedRecords) : [];
  });

  const handleConvert = () => {
    if (!rates) return;

    const conversionRate = rates[toCurrency] / rates[fromCurrency];
    const convertedAmount = amount * conversionRate;
    setResult(convertedAmount);

    const newRecord: ConversionRecord = {
      from: fromCurrency,
      to: toCurrency,
      amount,
      result: convertedAmount,
      date: new Date().toLocaleString(),
    };

    const updatedRecords = [newRecord, ...records];
    setRecords(updatedRecords);
    localStorage.setItem("conversionRecords", JSON.stringify(updatedRecords));
  };

  return (
    <div
      className="container py-5"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <Header />
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <div className="alert alert-danger text-center">{error}</div>
      ) : (
        rates && (
          <>
            <CurrencyConverter
              rates={rates}
              fromCurrency={fromCurrency}
              setFromCurrency={setFromCurrency}
              toCurrency={toCurrency}
              setToCurrency={setToCurrency}
              amount={amount}
              setAmount={setAmount}
              onConvert={handleConvert}
            />
            <ConversionResult
              amount={amount}
              fromCurrency={fromCurrency}
              toCurrency={toCurrency}
              result={result}
            />
            <ConversionHistory records={records} />
          </>
        )
      )}
    </div>
  );
};

export default App;

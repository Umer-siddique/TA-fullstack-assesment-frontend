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
  const { rates, loading, error } = useRates(); // Fetch rates, loading state, and error
  const [fromCurrency, setFromCurrency] = useState<string>("USD"); // From currency state
  const [toCurrency, setToCurrency] = useState<string>("EUR"); // To currency state
  const [amount, setAmount] = useState<number>(0); // Amount to convert
  const [result, setResult] = useState<number | null>(null); // Conversion result state
  const [records, setRecords] = useState<ConversionRecord[]>(() => {
    const savedRecords = localStorage.getItem("conversionRecords");
    return savedRecords ? JSON.parse(savedRecords) : []; // Retrieve saved records from localStorage
  });

  const handleConvert = () => {
    if (!rates) return;

    const conversionRate = rates[toCurrency] / rates[fromCurrency]; // Calculate conversion rate
    const convertedAmount = amount * conversionRate; // Perform conversion
    setResult(convertedAmount); // Set the conversion result

    const newRecord: ConversionRecord = {
      from: fromCurrency,
      to: toCurrency,
      amount,
      result: convertedAmount,
      date: new Date().toLocaleString(),
    };

    const updatedRecords = [newRecord, ...records]; // Add new record
    setRecords(updatedRecords);
    localStorage.setItem("conversionRecords", JSON.stringify(updatedRecords)); // Save to localStorage
  };

  return (
    <div
      className="container py-5"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <Header />
      {loading ? (
        <LoadingSpinner /> // Show loading spinner while fetching data
      ) : error ? (
        <div className="alert alert-danger text-center">{error}</div> // Display error if any
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

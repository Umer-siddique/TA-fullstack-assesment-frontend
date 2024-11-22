import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

interface Rates {
  [key: string]: number;
}

interface ConversionRecord {
  from: string;
  to: string;
  amount: number;
  result: number;
  date: string;
}

const App: React.FC = () => {
  const [rates, setRates] = useState<Rates | null>(null);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [amount, setAmount] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [records, setRecords] = useState<ConversionRecord[]>(() => {
    const savedRecords = localStorage.getItem("conversionRecords");
    return savedRecords ? JSON.parse(savedRecords) : [];
  });

  useEffect(() => {
    const fetchRates = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get("http://localhost:8000/api/v1/rates");
        setRates(data.data);
      } catch (error) {
        console.error("Error fetching rates", error);
        setError("Unable to fetch rates. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

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
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
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
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "200px" }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      ) : (
        rates && (
          <>
            <div className="row mb-3">
              <div className="col">
                <select
                  className="form-select shadow-sm"
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  style={{ fontSize: "1rem", padding: "0.75rem" }}
                >
                  {Object.keys(rates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col">
                <select
                  className="form-select shadow-sm"
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  style={{ fontSize: "1rem", padding: "0.75rem" }}
                >
                  {Object.keys(rates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
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
              onClick={handleConvert}
              style={{
                fontSize: "1rem",
                padding: "0.75rem",
                fontWeight: 600,
              }}
            >
              <i className="bi bi-arrow-left-right me-2"></i>
              Convert
            </button>
            {result !== null && (
              <div
                className="alert alert-success text-center shadow-sm"
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                }}
              >
                {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
              </div>
            )}
            <h2
              className="mt-5 text-center py-3"
              style={{
                color: "#007bff",
                fontWeight: 800,
                fontSize: "2rem",
                backgroundColor: "#e9ecef",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              <i className="bi bi-clock-history me-2"></i>Conversion History
            </h2>
            <div className="table-responsive mt-3">
              <table className="table table-striped table-hover shadow-sm">
                <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Amount</th>
                    <th>Result</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((record, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{record.from}</td>
                      <td>{record.to}</td>
                      <td>{record.amount}</td>
                      <td>{record.result.toFixed(2)}</td>
                      <td>{record.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default App;

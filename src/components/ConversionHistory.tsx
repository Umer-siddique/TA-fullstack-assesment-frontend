import React from "react";
import { ConversionRecord } from "../types/interfaces";

interface ConversionHistoryProps {
  records: ConversionRecord[];
}

const ConversionHistory: React.FC<ConversionHistoryProps> = ({ records }) => (
  <div className="conversion-history mt-5">
    {/* Styled Heading */}
    <h2
      className="text-center py-3 mb-4"
      style={{
        color: "#007bff",
        fontWeight: 800,
        fontSize: "clamp(1.5rem, 5vw, 2rem)", // Responsive font size
        backgroundColor: "#e9ecef",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem", // Ensure spacing on smaller screens
      }}
    >
      <i
        className="bi bi-clock-history me-2"
        style={{
          fontSize: "clamp(1.2rem, 4vw, 1.8rem)", // Responsive icon size
          color: "#007bff",
        }}
      ></i>
      Conversion History
    </h2>

    {/* Table */}
    <div className="table-responsive mt-3">
      <table className="table table-striped table-hover shadow-sm">
        <thead className="thead-dark">
          <tr>
            <th style={{ whiteSpace: "nowrap" }}>#</th>
            <th style={{ whiteSpace: "nowrap" }}>From</th>
            <th style={{ whiteSpace: "nowrap" }}>To</th>
            <th style={{ whiteSpace: "nowrap" }}>Amount</th>
            <th style={{ whiteSpace: "nowrap" }}>Result</th>
            <th style={{ whiteSpace: "nowrap" }}>Date</th>
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
  </div>
);

export default ConversionHistory;

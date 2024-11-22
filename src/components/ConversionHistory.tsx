import React from "react";
// Importing ConversionRecord type for type safety
import { ConversionRecord } from "../types/interfaces";

interface ConversionHistoryProps {
  records: ConversionRecord[]; // Array of conversion records
}

const ConversionHistory: React.FC<ConversionHistoryProps> = ({ records }) => (
  <div className="conversion-history mt-5">
    {/* Section Heading */}
    <h2 className="conversion-heading text-primary bg-light-gray rounded shadow">
      <i className="bi bi-clock-history icon-primary me-2"></i>
      Conversion History
    </h2>

    {/* Display message if no records */}
    {records.length === 0 ? (
      <div className="text-center mt-4">No Conversion History!</div>
    ) : (
      // Table for listing conversion records
      <div className="table-responsive mt-3">
        <table className="table table-striped table-hover shadow-sm">
          <thead className="thead-dark">
            {/* Table headers */}
            <tr>
              <th className="table-heading">#</th>
              <th className="table-heading">From</th>
              <th className="table-heading">To</th>
              <th className="table-heading">Amount</th>
              <th className="table-heading">Result</th>
              <th className="table-heading">Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Loop through and display each record */}
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
    )}
  </div>
);

export default ConversionHistory;

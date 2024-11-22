import React from "react";
import { ConversionRecord } from "../types/interfaces";

interface ConversionHistoryProps {
  records: ConversionRecord[];
}

const ConversionHistory: React.FC<ConversionHistoryProps> = ({ records }) => (
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
);

export default ConversionHistory;

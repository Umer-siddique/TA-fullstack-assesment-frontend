import React from "react";
import { ConversionResultProps } from "../types/interfaces";

const ConversionResult: React.FC<ConversionResultProps> = ({
  amount,
  fromCurrency,
  toCurrency,
  result,
}) =>
  result !== null ? (
    <div
      className="alert alert-success text-center shadow-sm"
      style={{
        fontSize: "1.2rem",
        fontWeight: 600,
      }}
    >
      {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
    </div>
  ) : null;

export default ConversionResult;

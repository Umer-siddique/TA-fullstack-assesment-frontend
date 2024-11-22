import React from "react";
import { ConversionResultProps } from "../types/interfaces";

const ConversionResult: React.FC<ConversionResultProps> = ({
  amount,
  fromCurrency,
  toCurrency,
  result,
}) =>
  result !== null ? (
    // Display conversion result if available
    <div className="alert alert-success text-center shadow-sm-custom alert-success-custom">
      {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
    </div>
  ) : null; // No result, return null

export default ConversionResult;

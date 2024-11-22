export interface ConversionRecord {
  from: string;
  to: string;
  amount: number;
  result: number;
  date: string;
}

export interface CurrencyConverterProps {
  rates: { [key: string]: number };
  fromCurrency: string;
  setFromCurrency: (currency: string) => void;
  toCurrency: string;
  setToCurrency: (currency: string) => void;
  amount: number;
  setAmount: (amount: number) => void;
  onConvert: () => void;
}

export interface ConversionResultProps {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  result: number | null;
}

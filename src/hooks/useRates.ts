import { useEffect, useState } from "react";
import { fetchRates } from "../services/api";

interface Rates {
  [key: string]: number;
}

const useRates = () => {
  const [rates, setRates] = useState<Rates | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getRates = async () => {
      setLoading(true);
      try {
        const data = await fetchRates();
        setRates(data);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Unable to fetch rates. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getRates();
  }, []);

  return { rates, loading, error };
};

export default useRates;

import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchRates = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/rates`);
  return data.data;
};

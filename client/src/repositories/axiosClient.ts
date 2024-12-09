import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

if (!BASE_URL) {
  throw new Error("Missing API configuration in environment variables.");
}

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

export default axiosClient;

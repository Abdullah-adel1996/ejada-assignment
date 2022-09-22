import Axios from "axios";

export const axiosInstance = (token) => {
  return Axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      "Content-Type": "Application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });
};

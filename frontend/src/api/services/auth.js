import { axiosInstance } from "../axiosInstances";

export const login = (email, password) => {
  return axiosInstance().post("/api/auth/login", { email, password });
};

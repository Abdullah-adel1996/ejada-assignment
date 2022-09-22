import { axiosInstance } from "../axiosInstances";
import { getToken } from "../../common/utils/getToken";

export const getUserDetails = () => {
  return axiosInstance(getToken()).get("/api/users/me");
};

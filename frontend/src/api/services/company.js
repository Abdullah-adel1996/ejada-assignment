import { axiosInstance } from "../axiosInstances";
import { getToken } from "../../common/utils/getToken";

export const getCompanyDetails = () => {
  return axiosInstance(getToken()).get("/api/company/details");
};

export const updateCompanyProfile = (logoUrl, id) => {
  return axiosInstance(getToken()).put("/api/company/logo", { logoUrl, id });
};

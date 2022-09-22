import { useEffect, useState } from "react";
import { message, Spin } from "antd";
import {
  getCompanyDetails,
  updateCompanyProfile,
} from "../../api/services/company";
import { Header } from "../../common/components/Header";
import { CompanyProfile } from "./CompanyProfile";
import { getUserDetails } from "../../api/services/users";

export const HomePage = () => {
  const [company, setCompany] = useState();
  const [logo, setLogo] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();

  const getCompany = () => {
    setLoading(true);
    getCompanyDetails()
      .then((res) => (setCompany(res.data.company), setLoading(false)))
      .catch(
        (error) => (
          message.error(error.response.data.message), setLoading(false)
        )
      );
  };

  const getUser = () => {
    getUserDetails()
      .then((res) => (setUser(res.data.user), getCompany()))
      .catch((error) => message.error(error.response.data.message));
  };

  const handleUploadCompanyLogo = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      updateCompanyProfile(reader.result, company?.id)
        .then(
          () => (message.success("Logo updated successfully!"), getCompany())
        )
        .catch(() => message.error("Something went wrong!"));
    };
  };

  const handleDeleteCompanyLogo = () => {
    setLogo("");
    updateCompanyProfile("", company?.id)
      .then(() => (message.success("Logo deleted successfully!"), getCompany()))
      .catch(() => message.error("Something went wrong!"));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Spin spinning={loading}>
        <Header
          companyName={company?.name}
          userName={user?.first_name}
          handleUploadCompanyLogo={handleUploadCompanyLogo}
          handleDeleteCompanyLogo={handleDeleteCompanyLogo}
          companyLogo={company?.logo}
          logo={logo}
          isAdmin={user?.is_admin}
        />
        <CompanyProfile company={company} />
      </Spin>
    </>
  );
};

import {
  TeamOutlined,
  HistoryOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

import companyImg from "../../assets/img/company.jpeg";

export const CompanyProfile = ({ company }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${companyImg})`,
      }}
      className="h-screen w-full bg-[#000000b3] bg-blend-multiply bg-cover"
    >
      <div className="flex flex-row-reverse p-4 h-1/2 items-center ml-14 w-1/2">
        <div className="flex flex-col">
          <span className="font-bold text-white mb-4 text-4xl">
            {company?.slogan}
          </span>
          <span className="font-bold text-white text-small">
            {company?.details}
          </span>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex xs:flex-col p-8 justify-center text-white w-3/4">
          <div className="flex flex-col mr-10">
            <TeamOutlined style={{ color: "#32c3c5", fontSize: "3rem" }} />
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl text-center my-4">
                Employees
              </span>
              <span>
                <span>
                  <span className="text-[#32c3c5] font-bold">
                    {company?.name}
                  </span>
                  <span> has more than </span>
                  <span className="text-[#32c3c5] font-bold">
                    {company?.number_of_employees}
                  </span>
                  <span>
                    {" "}
                    employees in diffrent departments and diffrent countries.{" "}
                  </span>
                </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col mr-10">
            <HistoryOutlined style={{ color: "#32c3c5", fontSize: "3rem" }} />
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl my-4">History</span>
              <span>
                <span className="text-[#32c3c5] font-bold">
                  {company?.name}
                </span>
                <span> established in </span>
                <span className="text-[#32c3c5] font-bold">
                  {company?.year_of_creation}
                </span>
                <span> and have multible offices in diffrent countrie.</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col mr-10">
            <PhoneOutlined style={{ color: "#32c3c5", fontSize: "3rem" }} />
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl my-4">Contact Us</span>
              <span>
                <span>you can contact with us with phone number </span>
                <span
                  onClick={() => window.open(`tel:${company?.phone_number}`)}
                  className="text-[#32c3c5] font-bold underline underline-offset-4 cursor-pointer"
                >
                  {company?.phone_number}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

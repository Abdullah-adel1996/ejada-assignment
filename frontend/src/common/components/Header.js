import { Tooltip, Avatar } from "antd";
import {
  LogoutOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

export const Header = ({
  companyName,
  userName,
  companyLogo,
  logo,
  handleDeleteCompanyLogo,
  handleUploadCompanyLogo,
  isAdmin,
}) => {
  return (
    <header className="flex justify-between items-center py-4 px-10 bg-[#f5f5f5]">
      <div className="flex items-center">
        {isAdmin ? (
          <div className="flex items-center mr-4">
            <label htmlFor="file-input" className="mb-1 mr-2">
              <EditOutlined style={{ cursor: "pointer", fontSize: "1.2rem" }} />
            </label>
            <input
              id="file-input"
              type="file"
              value={logo}
              className="hidden"
              accept="image/png, image/gif, image/jpeg"
              onChange={handleUploadCompanyLogo}
            />
            <DeleteOutlined
              style={{ cursor: "pointer", fontSize: "1.2rem" }}
              onClick={handleDeleteCompanyLogo}
            />
          </div>
        ) : null}
        <Avatar src={companyLogo} />
        <h1 className="text-3xl text-[#32c3c5] font-bold tracking-widest ml-4 mb-0">
          {companyName}
        </h1>
      </div>
      <div className="flex items-center">
        <span className="font-bold text-[#32c3c5] mr-2">Hi {userName}</span>
        <Tooltip title="logout">
          <LogoutOutlined
            style={{
              fontSize: "1.2rem",
              color: "#32c3c5",
              cursor: "pointer",
              fontWeight: "bolder",
            }}
            onClick={() => (
              localStorage.removeItem("token"), window.location.reload()
            )}
          />
        </Tooltip>
      </div>
    </header>
  );
};

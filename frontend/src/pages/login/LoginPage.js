import { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router";

import { login } from "../../api/services/auth";
import meetingImg from "../../assets/img/meeting.jpeg";

export const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (values) => {
    setLoading(true);
    login(values.email, values.password)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      })
      .catch(
        (error) => (
          setLoading(false), message.error(error.response.data.message)
        )
      )
      .finally(() => setLoading(false));
  };

  const handleFormSubmitFailed = () => {
    message.error("Please input a valid credential!");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${meetingImg})`,
      }}
      className="flex h-screen w-screen items-center justify-center bg-[#000000b3] bg-blend-multiply bg-cover"
    >
      <Form
        name="basic"
        style={{
          padding: "1rem",
        }}
        className="w-1/4 bg-white rounded-2xl"
        initialValues={{ remember: true }}
        onFinish={handleLogin}
        onFinishFailed={handleFormSubmitFailed}
        autoComplete="off"
      >
        <h1 className="mb-8 text-xl text-center font-semibold text-text-dark">
          Login to company profile
        </h1>

        <span></span>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input a valid email!",
            },
          ]}
        >
          <Input
            style={{ padding: "7px", borderRadius: "10px" }}
            placeholder="Email"
          />
        </Form.Item>

        <span></span>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            style={{ padding: "7px", borderRadius: "10px" }}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item style={{ textAlign: "center", marginTop: "2rem" }}>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

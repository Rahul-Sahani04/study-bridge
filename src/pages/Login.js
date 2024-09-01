import React from "react";
import "../styles/Login.css";

import { LockOutlined, UserOutlined, TwitterCircleFilled, GoogleCircleFilled, LinkedinFilled } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";

import OrContinueWith from "../assets/ContinueWith.svg";

import People from "../assets/peoples.svg";
import { Link } from "react-router-dom";
const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="bg-[var(--bg-secondary)] flex flex-col justify-center items-center">
    <div className="absolute flex  top-8 left-8 text-[var(--text-secondary)] cursor-pointer text-xl  hover:text-[var(--text-primary)] transition-all delay-100 ease-in-out">
    <Link to="/">&larr;<span className="hover:underline"> Go back </span> </Link>
    </div>
      <div>
        <h1 className="text-6xl font-extralight mt-6 italic text-center text-[var(--text-secondary)]">
          Welcome <br />
          <span> to </span>
          <span className="study__text"> STUDY </span>
          <span className="bridge__text"> BRIDGE</span>
        </h1>
      </div>

      <div className="login__form">
        <Form
          name="login"
          initialValues={{
            remember: true,
          }}
          style={{
            maxWidth: 360,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            className="input__placeholder" 
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input className="input__login" prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            className="input__placeholder" 
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
            className="input__login" 
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="#">Forgot password</a>
            </Flex>
          </Form.Item>

          <Form.Item className="text-center gap-4">
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            <div className="or__divider mt-2">
              <span>OR</span>
            </div>
            <a href="" className="text-blue-800">Register now!</a>
          </Form.Item>
        </Form>

        <div className="continue__with">
            
          <img src={OrContinueWith} alt="Continue with" />  
        </div>

        <div className="social__login flex flex-row justify-between">
        <GoogleCircleFilled  />
        <TwitterCircleFilled />
        <LinkedinFilled />

        </div>
      </div>

      <img  src={People} alt="People" className="people__image" />
    </div>
  );
};

export default Login;

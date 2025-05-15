"use client";

import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Typography,
  Divider,
  message,
  Checkbox,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  GoogleOutlined,
  FacebookFilled,
  GithubOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { useRouter } from "next/navigation";
import { login, getUserFromToken } from "@/store/reducers/authenReducer";

const { Title, Text } = Typography;

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  interface LoginFormValues {
    email: string;
    password: string;
    remember?: boolean;
  }

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const onFinish = async (values: LoginFormValues) => {
    setLoading(true);
    try {
      const { email, password } = values;
      const response = await dispatch(login({ email, password }));
      if (response.meta.requestStatus === "fulfilled") {
        await dispatch(getUserFromToken());
        messageApi.success("Login successful!", 10);
        router.push("/");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        messageApi.error(error.message);
      } else {
        messageApi.error("Login failed. Please try again!");
      }
    } finally {
      setLoading(false);
    }
  };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <Card
          className="w-full max-w-md border-0 shadow-xl rounded-2xl overflow-hidden"
          style={{ padding: "40px" }}
        >
          <div className="text-center mb-8">
            <Title level={2} className="text-2xl font-bold text-gray-800 mb-2">
              Welcome Back
            </Title>
            <Text type="secondary" className="text-gray-500">
              Sign in to continue to your account
            </Text>
          </div>

           {contextHolder}
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
            className="space-y-6"
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder="Email address"
                size="large"
                className="h-12 rounded-lg"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                autoComplete="off"
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="Password"
                size="large"
                className="h-12 rounded-lg"
                visibilityToggle={{ visible: false }}
              />
            </Form.Item>

            <div className="flex items-center justify-between mb-2">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className="text-gray-600">Remember me</Checkbox>
              </Form.Item>
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-blue-600 hover:text-blue-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Form.Item className="mb-0">
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                loading={loading}
                className="h-12 text-base font-medium rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-none shadow-lg"
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </Form.Item>
          </Form>

          <Divider className="text-gray-400 text-xs">OR CONTINUE WITH</Divider>

          <div className="flex justify-center gap-6 mb-8">
            <Button
              icon={<GoogleOutlined className="text-red-500" />}
              shape="circle"
              size="large"
              className="flex items-center justify-center border-gray-200 hover:border-blue-400 hover:shadow-md transition-all"
              onClick={() => messageApi.info('Tính năng đăng nhập Google sẽ sớm có!')}
              disabled={loading}
            />
            <Button
              icon={<FacebookFilled className="text-blue-600" />}
              shape="circle"
              size="large"
              className="flex items-center justify-center border-gray-200 hover:border-blue-400 hover:shadow-md transition-all"
              onClick={() => messageApi.info('Tính năng đăng nhập Facebook sẽ sớm có!')}
              disabled={loading}
            />
            <Button
              icon={<GithubOutlined className="text-gray-800" />}
              shape="circle"
              size="large"
              className="flex items-center justify-center border-gray-200 hover:border-blue-400 hover:shadow-md transition-all"
              onClick={() => messageApi.info('Tính năng đăng nhập Github sẽ sớm có!')}
              disabled={loading}
            />
          </div>

          <div className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-blue-600 hover:text-blue-500 hover:underline"
            >
              Sign up
            </Link>
          </div>
        </Card>
      </div>
    );
  };

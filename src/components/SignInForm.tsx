"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Checkbox, Form, Input, Space, Divider, Select } from "antd";
import Image from "next/image";
import {
  FacebookOutlined,
  GithubOutlined,
  GoogleOutlined,
  UserOutlined,
  LockOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

type Inputs = {
  email: string;
  password: string;
  remember: boolean;
};

const SignInForm = () => {
  const { handleSubmit } = useForm<Inputs>();
  const { t } = useTranslation();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Đăng nhập với ${provider}`);
  };

  return (
    <>
      {/* Language Selector */}
      <div className="flex justify-end mb-4">
        <div className="flex items-center gap-2 text-sm">
          <GlobalOutlined className="text-gray-500" />
          <Select
            defaultValue="vi"
            size="small"
            className="min-w-[120px]"
            options={[
              {
                label: (
                  <span className="flex items-center gap-2">
                    <Image
                      src="/images/icons/flags/en.png"
                      alt="English"
                      width={20}
                      height={20}
                    />
                    English
                  </span>
                ),
                value: "en",
              },
              {
                label: (
                  <span className="flex items-center gap-2">
                    <Image
                      src="/images/icons/flags/vi.png"
                      alt="Vietnamese"
                      width={20}
                      height={20}
                    />
                    Tiếng Việt
                  </span>
                ),
                value: "vi",
              },
            ]}
          />
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {t("login.welcome")} 👋
        </h2>
        <p className="text-gray-600">{t("login.welcome.text")}</p>
      </div>

      <Form
        onFinish={handleSubmit(onSubmit)}
        layout="vertical"
        className="space-y-4"
      >
        <Form.Item>
          <Input
            size="large"
            type="email"
            placeholder="Nhập email của bạn"
            prefix={<UserOutlined className="text-gray-400" />}
            className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
          />
        </Form.Item>

        <Form.Item>
          <Input.Password
            size="large"
            placeholder="Nhập mật khẩu"
            prefix={<LockOutlined className="text-gray-400" />}
            className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
          />
        </Form.Item>

        <div className="flex items-center justify-between">
          <Checkbox className="text-gray-600">Ghi nhớ đăng nhập</Checkbox>
          <a href="#" className="text-blue-500 hover:text-blue-600 text-sm">
            Quên mật khẩu?
          </a>
        </div>

        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 border-none hover:from-blue-600 hover:to-purple-700 rounded-lg h-12 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
        >
          Đăng nhập ngay
        </Button>

        <Divider className="text-gray-400">Hoặc đăng nhập với</Divider>

        <Space direction="horizontal" className="w-full">
          <Button
            size="large"
            className="w-full rounded-lg border-gray-300 hover:border-red-400 hover:text-red-500 transition-all duration-200 flex items-center justify-center gap-2"
            onClick={() => handleSocialLogin("Google")}
          >
            <GoogleOutlined className="text-lg" />
            Google
          </Button>

          <Button
            size="large"
            className="w-full rounded-lg border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center gap-2"
            onClick={() => handleSocialLogin("Facebook")}
          >
            <FacebookOutlined className="text-lg" />
            Facebook
          </Button>

          <Button
            size="large"
            className="w-full rounded-lg border-gray-300 hover:border-gray-800 hover:text-gray-800 transition-all duration-200 flex items-center justify-center gap-2"
            onClick={() => handleSocialLogin("GitHub")}
          >
            <GithubOutlined className="text-lg" />
            GitHub
          </Button>
        </Space>

        <div className="text-center mt-2">
          <span className="text-gray-600">Chưa có tài khoản? </span>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-600 font-semibold"
          >
            Đăng ký ngay
          </a>
        </div>
      </Form>
    </>
  );
};

export default SignInForm;

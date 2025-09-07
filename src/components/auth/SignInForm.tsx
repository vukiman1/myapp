"use client";
import { Button, Checkbox, Form, Input, Space, Divider } from "antd";
import {
  FacebookOutlined,
  GithubOutlined,
  GoogleOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import SelectLanguage from "../../lib/selectLanguage";
import { useQuery } from "@tanstack/react-query";
import { SelectTheme } from "@/lib/selectTheme";
import { deleteMany, getMany, setMany } from "@/helper/localstorage";
import CloudflareTurnstile from "@/lib/cloudflare/cloudflare_turnstile";
import { useState } from "react";
type FormValues = {
  email: string;
  password: string;
  remember: boolean;
};

const SignInForm = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm<FormValues>();
  const [loading, setLoading] = useState(true);
  const [localEmail] = getMany(["email"]);
  const socialLogin = [
    { name: "google", icon: GoogleOutlined },
    { name: "facebook", icon: FacebookOutlined },
    { name: "github", icon: GithubOutlined },
  ];
  const onFinish = (values: FormValues) => {
    console.log(values);
    // TODO: Call API login here
    // loginApi(values);
    if (values.remember) {
      setMany(
        ["remember", "email"],
        [values.remember.toString(), values.email],
      );
    } else {
      deleteMany(["remember", "email"]);
    }
  };

  const handleTurnstileSuccess = (token: string) => {
    console.log("🔑 Turnstile success:", token);
    setLoading(false);
  };

  const handleTurnstileError = (error: string) => {
    console.log("❌ Turnstile error:", error);
    setLoading(false);
  };

  const handleTurnstileExpire = () => {
    console.log("⏰ Turnstile expired");
    setLoading(false);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log("❌ Form validation failed:", errorInfo);
  };

  const { data } = useQuery({
    queryKey: ["test"],
    queryFn: () => Promise.resolve(5),
  });

  const handleSocialLogin = (provider: string) => {
    console.log(`🔗 Social login with ${provider}`, data);
    // TODO: Implement social login
  };

  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2">
          {t("login.login").toUpperCase()}
        </h2>
      </div>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        className="space-y-4"
        initialValues={{ remember: false }}
      >
        <Form.Item
          name="email"
          initialValue={localEmail}
          rules={[
            { required: true, message: "Vui lòng nhập email!" },
            { type: "email", message: "Email không hợp lệ!" },
          ]}
        >
          <Input
            size="large"
            type="email"
            placeholder={t("login.emailPlaceholder")}
            prefix={<UserOutlined className="text-icon" />}
            className="rounded-lg form-input"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Vui lòng nhập mật khẩu!" },
            { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự!" },
          ]}
        >
          <Input.Password
            size="large"
            placeholder={t("login.passwordPlaceholder")}
            prefix={<LockOutlined className="text-icon" />}
            className="rounded-lg form-input"
          />
        </Form.Item>

        <div className="flex items-center justify-between">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="text-secondary" checked={true}>
              {t("login.remember")}
            </Checkbox>
          </Form.Item>
          <a href="#" className="text-link text-sm">
            {t("login.forgotPassword")}
          </a>
        </div>

        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          size="large"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 border-none hover:from-blue-600 hover:to-purple-700 rounded-lg h-12 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
        >
          {t("login.loginButton")}
        </Button>

        <Divider className="divider-theme">{t("login.orLoginWith")}</Divider>

        <Space direction="horizontal" className="w-full">
          {socialLogin.map((social) => (
            <Button
              key={social.name}
              size="large"
              className="w-full rounded-lg btn-social hover:border-red-400 hover:text-red-500 flex items-center justify-center gap-2"
              onClick={() => handleSocialLogin(social.name)}
              icon={<social.icon className="text-lg" />}
            >
              {t(`social.${social.name}`)}
            </Button>
          ))}
        </Space>

        <div className="flex justify-center my-4">
          <CloudflareTurnstile
            onSuccess={handleTurnstileSuccess}
            onError={handleTurnstileError}
            onExpire={handleTurnstileExpire}
            theme="auto"
            size="normal"
            className="mx-auto"
          />
        </div>
        <div className="text-center">
          <span className="text-secondary">{t("login.noAccount")}</span>
          <a href="#" className="text-link font-semibold">
            {t("login.signUpNow")}
          </a>
        </div>

        <div className="text-center flex justify-center">
          <div className="flex items-center gap-2 text-sm">
            <SelectLanguage />
            <SelectTheme />
          </div>
        </div>
      </Form>
    </>
  );
};

export default SignInForm;

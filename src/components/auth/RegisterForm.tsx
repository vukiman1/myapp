"use client";
import { Button, Checkbox, Form, Input, Space, Divider } from "antd";
import {
  FacebookOutlined,
  GithubOutlined,
  GoogleOutlined,
  UserOutlined,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import SelectLanguage from "../../lib/selectLanguage";
import { useMutation } from "@tanstack/react-query";
import { SelectTheme } from "@/lib/selectTheme";
import CloudflareTurnstile from "@/lib/cloudflare/cloudflare_turnstile";
import { useState } from "react";
import { AuthApi } from "@/app/api/auth/auth";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
  captchaToken: string;
};

const RegisterForm = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm<FormValues>();
  const [loading, setLoading] = useState(true);

  const socialLogin = [
    { name: "google", icon: GoogleOutlined },
    { name: "facebook", icon: FacebookOutlined },
    { name: "github", icon: GithubOutlined },
  ];

  const mutation = useMutation({
    mutationFn: AuthApi.register,
    onSuccess: () => {
      console.log("Register success");
      setLoading(false);
    },
    onError: () => {
      console.log("Register error");
      setLoading(false);
    },
  });

  const onFinish = (values: FormValues) => {
    setLoading(true);
    mutation.mutate({
      name: values.name,
      email: values.email,
      password: values.password,
      captchaToken: values.captchaToken,
    });
  };

  const handleTurnstileSuccess = (token: string) => {
    form.setFieldValue("captchaToken", token);
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

  const handleSocialLogin = (provider: string) => {
    console.log(`🔗 Social register with ${provider}`);
    // TODO: Implement social register
  };

  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2">
          {t("register.register").toUpperCase()}
        </h2>
      </div>
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        className="space-y-4"
        initialValues={{ agreeTerms: false }}
      >
        <Form.Item
          name="name"
          rules={[
            { required: true, message: "Vui lòng nhập họ tên!" },
            { min: 2, message: "Họ tên phải có ít nhất 2 ký tự!" },
          ]}
        >
          <Input
            size="large"
            type="text"
            placeholder={t("register.namePlaceholder")}
            prefix={<UserOutlined className="text-icon" />}
            className="rounded-lg form-input"
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email!" },
            { type: "email", message: "Email không hợp lệ!" },
          ]}
        >
          <Input
            size="large"
            type="email"
            placeholder={t("register.emailPlaceholder")}
            prefix={<MailOutlined className="text-icon" />}
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
            placeholder={t("register.passwordPlaceholder")}
            prefix={<LockOutlined className="text-icon" />}
            className="rounded-lg form-input"
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Vui lòng xác nhận mật khẩu!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Mật khẩu xác nhận không khớp!"),
                );
              },
            }),
          ]}
        >
          <Input.Password
            size="large"
            placeholder={t("register.confirmPasswordPlaceholder")}
            prefix={<LockOutlined className="text-icon" />}
            className="rounded-lg form-input"
          />
        </Form.Item>

        <Form.Item
          name="agreeTerms"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error("Vui lòng đồng ý với điều khoản!"),
                    ),
            },
          ]}
        >
          <Checkbox className="text-secondary">
            {t("register.agreeTerms")}{" "}
            <a href="#" className="text-link">
              {t("register.termsOfService")}
            </a>{" "}
            {t("register.and")}{" "}
            <a href="#" className="text-link">
              {t("register.privacyPolicy")}
            </a>
          </Checkbox>
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          size="large"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 border-none hover:from-blue-600 hover:to-purple-700 rounded-lg h-12 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
        >
          {t("register.registerButton")}
        </Button>

        <Divider className="divider-theme">
          {t("register.orRegisterWith")}
        </Divider>

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
          <span className="text-secondary">{t("register.haveAccount")}</span>
          <a href="/signin" className="text-link font-semibold">
            {t("register.signInNow")}
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

export default RegisterForm;

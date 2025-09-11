import { apiFetch } from "../client";

export type User = {
  id: string;
  email: string;
  name: string;
};

export type LoginParams = {
  email: string;
  password: string;
  captchaToken: string;
};

export type LoginResponse = {
  user: User;
  isAuthenticated: boolean;
};

export type RegisterParams = {
  name: string;
  email: string;
  password: string;
  captchaToken: string;
};

export type RegisterResponse = {
  user: User;
  isAuthenticated: boolean;
};

class AuthApi {
  static getMe = () => apiFetch<User>("/auth/me");
  static login = (params: LoginParams) =>
    apiFetch<LoginResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(params),
    });
  static register = (params: RegisterParams) =>
    apiFetch<RegisterResponse>("/auth/register", {
      method: "POST",
      body: JSON.stringify(params),
    });
}

export { AuthApi };

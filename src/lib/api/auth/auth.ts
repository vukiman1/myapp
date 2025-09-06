import { apiFetch } from "../client";

export type User = {
  id: string;
  email: string;
  name: string;
};

export const getMe = () => apiFetch<User>("/auth/me");

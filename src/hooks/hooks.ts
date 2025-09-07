"use client";

import { useQuery } from "@tanstack/react-query";
import { AuthApi } from "@/lib/api/auth/auth";

export function useMe() {
  return useQuery({
    queryKey: ["me"],
    queryFn: AuthApi.getMe,
  });
}

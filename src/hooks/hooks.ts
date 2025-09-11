"use client";

import { useQuery } from "@tanstack/react-query";
import { AuthApi } from "@/app/api/auth/auth";

export function useMe() {
  return useQuery({
    queryKey: ["me"],
    queryFn: AuthApi.getMe,
    // Only run on client-side
    enabled: typeof window !== "undefined",
    retry: false,
  });
}

"use client";

import { ConfigProvider, theme } from "antd";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface AntdThemeProviderProps {
  children: React.ReactNode;
}

const AntdThemeProvider: React.FC<AntdThemeProviderProps> = ({ children }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Tránh hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  const isDark = resolvedTheme === "dark";

  const antdTheme = {
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      // Brand colors
      colorPrimary: "#3b82f6", // blue-500
      colorSuccess: "#10b981", // emerald-500
      colorWarning: "#f59e0b", // amber-500
      colorError: "#ef4444", // red-500
      colorInfo: "#3b82f6", // blue-500

      // Background colors
      colorBgContainer: isDark ? "#1f2937" : "#ffffff", // gray-800 : white
      colorBgElevated: isDark ? "#374151" : "#ffffff", // gray-700 : white
      colorBgLayout: isDark ? "#111827" : "#f9fafb", // gray-900 : gray-50

      // Text colors
      colorText: isDark ? "#f9fafb" : "#111827", // gray-50 : gray-900
      colorTextSecondary: isDark ? "#d1d5db" : "#6b7280", // gray-300 : gray-500
      colorTextTertiary: isDark ? "#9ca3af" : "#9ca3af", // gray-400 : gray-400

      // Border colors
      colorBorder: isDark ? "#374151" : "#e5e7eb", // gray-700 : gray-200
      colorBorderSecondary: isDark ? "#4b5563" : "#d1d5db", // gray-600 : gray-300

      // Typography
      fontFamily:
        "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontSize: 14,
      fontSizeHeading1: 32,
      fontSizeHeading2: 24,
      fontSizeHeading3: 20,

      // Border radius
      borderRadius: 8,
      borderRadiusLG: 12,
      borderRadiusSM: 6,

      // Spacing
      padding: 16,
      paddingLG: 24,
      paddingSM: 12,
      paddingXS: 8,

      // Shadows
      boxShadow: isDark
        ? "0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)"
        : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      boxShadowSecondary: isDark
        ? "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)"
        : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    },
    components: {
      // Form components
      Input: {
        colorBgContainer: isDark ? "#374151" : "#ffffff",
        colorBorder: isDark ? "#4b5563" : "#d1d5db",
        colorText: isDark ? "#f9fafb" : "#111827",
        activeBorderColor: "#3b82f6",
        hoverBorderColor: "#60a5fa",
      },
      Button: {
        colorPrimary: "#3b82f6",
        colorPrimaryHover: "#2563eb",
        colorPrimaryActive: "#1d4ed8",
        primaryShadow: isDark
          ? "0 2px 4px rgba(59, 130, 246, 0.3)"
          : "0 2px 4px rgba(59, 130, 246, 0.2)",
      },
      Select: {
        colorBgContainer: isDark ? "#374151" : "#ffffff",
        colorBorder: isDark ? "#4b5563" : "#d1d5db",
        colorText: isDark ? "#f9fafb" : "#111827",
        optionSelectedBg: isDark ? "#1f2937" : "#f3f4f6",
      },
      Checkbox: {
        colorPrimary: "#3b82f6",
        colorText: isDark ? "#f9fafb" : "#111827",
      },
      Divider: {
        colorSplit: isDark ? "#4b5563" : "#e5e7eb",
        colorText: isDark ? "#9ca3af" : "#6b7280",
      },
    },
  };

  return <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>;
};

export default AntdThemeProvider;

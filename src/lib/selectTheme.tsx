"use client";

import { useTheme } from "next-themes";
import { Select } from "antd";
import { SunOutlined, MoonOutlined, DesktopOutlined } from "@ant-design/icons";
import { useCallback, useEffect, useState } from "react";

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeOptions = ["light", "dark", "system"];
  const themeIcons = {
    light: <SunOutlined className="text-yellow-500" />,
    dark: <MoonOutlined className="text-blue-400" />,
    system: <DesktopOutlined className="text-gray-500" />,
  };

  const handleChange = useCallback(
    (value: string) => {
      setTheme(value);
    },
    [setTheme],
  );

  if (!mounted) {
    return (
      <div className="w-24 h-8 bg-input border-input rounded animate-pulse" />
    );
  }

  const options = themeOptions.map((option) => ({
    value: option,
    label: (
      <div className="flex items-center gap-2">
        {themeIcons[option as keyof typeof themeIcons]}
      </div>
    ),
  }));

  return (
    <Select
      value={theme}
      onChange={handleChange}
      options={options}
      size="small"
    />
  );
};
export const SelectTheme = () => {
  return <ThemeSelector />;
};

"use client";
import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";

const useTheme = () => {
  const { theme, setTheme, resolvedTheme } = useNextTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return { isDark, toggleTheme, theme };
};

export default useTheme;

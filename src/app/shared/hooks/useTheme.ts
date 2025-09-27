"use client";
import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";


const useTheme = () => {
  const { setTheme, resolvedTheme } = useNextTheme();
  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return { isDark, toggleTheme, resolvedTheme };
};

export default useTheme;

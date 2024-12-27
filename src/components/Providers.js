"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { LanguageProvider } from "./LanguageProvider";

export const Providers = ({ children, themeProps }) => {
  return (
    <NextUIProvider>
      <NextThemesProvider {...themeProps}>
        <LanguageProvider>{children}</LanguageProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
};

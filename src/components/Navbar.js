"use client";

import React from "react";
import { Navbar as NextNavbar, NavbarBrand, Button } from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useLanguage } from "./LanguageProvider";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <NextNavbar isBordered className="sticky top-0 z-50 ">
      <div className="container mx-auto flex items-center justify-between">
        <NavbarBrand>
          <span className="text-lg font-bold">CuciKereta.my</span>
        </NavbarBrand>

        <div className="flex items-center justify-center gap-4">
          <Button onPress={toggleLanguage} variant="light">
            {language === "bm" ? "English" : "Bahasa Malaysia"}
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
    </NextNavbar>
  );
};

export default Navbar;

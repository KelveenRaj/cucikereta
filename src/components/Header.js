"use client";

import { useLanguage } from "./LanguageProvider";

const Header = () => {
  const { language } = useLanguage();

  return (
    <header className="p-8">
      <div className="w-w-full container mx-auto text-center">
        <h1 className="mx-auto w-full text-[24px] lg:text-[36px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl">
          {language === "bm"
            ? "Senarai Tempat Cuci Kereta di Malaysia"
            : "Car Wash Directory in Malaysia"}
        </h1>
        <p className="mx-auto mt-8 mb-4 w-full px-8 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20">
          {language === "bm"
            ? "Kami sediakan senarai tempat cuci kereta seluruh Malaysia, dengan lokasi, jenis servis, dan anggaran harga."
            : "We provide a list of car wash locations across Malaysia, complete with details on services and price range."}
        </p>
      </div>
    </header>
  );
};
export default Header;

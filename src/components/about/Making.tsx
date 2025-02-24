"use client";

import { useTranslation } from "react-i18next";
import logoHero from "./../../../public/images/Hero Image.svg";
import fxStrok from "./../../../public/images/fx-strok.svg";
import { Link } from "react-router-dom";

const Making = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;

  return (
    <div
      className={`relative pt-[100px] lg:pt-[200px] w-full flex flex-col items-center justify-center px-4 lg:px-[300px] ${
        locale === "ar" ? "rtl" : "ltr"
      }`}
    >
      <img
        src={fxStrok}
        alt={t("Making.imageAlt.stroke")}
        className="absolute hidden lg:block top-32 left-1/2 -translate-x-[70%]"
      />
      <img
        width={180}
        height={100}
        src={logoHero}
        alt={t("Making.imageAlt.logo")}
        className="z-10 lg:w-[180px] w-[120px]"
      />
      <div>
        <h1 className="text-center text-[#0f519c] text-xl lg:text-[56px] font-semibold font-cabin leading-[68px]">
          {t("Making.title")}
        </h1>
        <bdi className="text-center block my-4 text-[#5e5959] text-base lg:text-2xl font-normal ">
          {t("Making.description")}
        </bdi>
        <div className="w-full text-center flex items-center justify-center gap-4 my-8">
          <Link
            to={"/contact"}
            className="lg:py-4 py-2 lg:px-8 px-4 bg-[#0e529b] rounded-xl  lg:text-xl text-white "
          >
            {t("Making.contactButton")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Making;

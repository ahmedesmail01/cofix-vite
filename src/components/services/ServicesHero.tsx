import logoHero from "./../../../public/images/Hero Image.svg";
import servicesBuilding from "./../../../public/images/building-services.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ServicesHero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden w-full bg-[#f5f5f7] flex flex-col items-center justify-center">
      {/* Background Building Image */}
      <img
        src={servicesBuilding}
        alt={t("ServicesHero.imageAlt.building")}
        className="top-0 left-0 absolute"
      />

      <div className="flex flex-col items-center justify-center p-4 lg:pt-[200px] pt-[100px] z-10">
        {/* Logo */}
        <img
          src={logoHero}
          alt={t("ServicesHero.imageAlt.logo")}
          className="lg:w-[180px] w-[120px]"
        />

        {/* Title */}
        <h1 className="text-center text-[#0f519c] text-xl lg:text-[56px] font-semibold font-cabin leading-[68px]">
          {t("ServicesHero.title")}
        </h1>

        {/* Description */}
        <p className="text-center text-[#5e5959] text-base lg:text-2xl font-normal lg:max-w-[800px]">
          {t("ServicesHero.description")}
        </p>

        {/* Contact Button */}
        <div className="w-full text-center flex items-center justify-center gap-4 my-8">
          <Link
            to={"/contact"}
            className="lg:py-4 py-2 lg:px-8 px-4 bg-[#0e529b] rounded-xl lg:text-xl text-white"
          >
            {t("ServicesHero.contactButton")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;

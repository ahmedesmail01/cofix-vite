import curvedLine from "./../../../public/images/curved-arrow.svg";
import fxStrok from "./../../../public/images/fx-strok.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div className="flex overflow-hidden relative flex-col text-center items-center justify-center gap-4 p-4 lg:gap-8">
      <img
        src={fxStrok}
        alt={t("Welcome.imageAlt.stroke")}
        className="absolute hidden lg:block top-0 -right-[300px]"
      />

      <div>
        <bdi className="text-center text-[#159861] text-base font-semibold ">
          {t("Welcome.greeting")}
        </bdi>
        <div className="relative text-[#0d519d] text-2xl lg:text-[56px] font-semibold  leading-[68px]">
          {t("Welcome.title")}
          <img
            src={curvedLine}
            alt={t("Welcome.imageAlt.curvedLine")}
            className="hidden lg:block absolute right-0 -bottom-[8px]"
          />
        </div>
      </div>
      <p className="w-auto lg:w-[865px] text-[#919191] text-lg lg:text-2xl font-normal leading-[30px]">
        {t("Welcome.description")}
      </p>
      <Link
        to={"/contact"}
        className="lg:py-4 py-2 lg:px-8 px-4 bg-[#0e529b] rounded-xl  lg:text-xl text-white "
      >
        {t("Welcome.contactButton")}
      </Link>
    </div>
  );
};

export default Welcome;

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Philosophy = () => {
  // 1) Grab both `t` and the `i18n` instance
  const { t, i18n } = useTranslation();

  // 2) The current locale (language code) is in i18n.language
  const locale = i18n.language;

  return (
    <section className="w-full flex flex-col items-center justify-center px-4 lg:px-[90px] py-8 lg:py-12">
      <div
        className={`max-w-[1114px] text-center ${
          locale === "ar" ? "rtl" : "ltr"
        }`}
      >
        <p className="text-2xl md:text-4xl lg:text-[56px] font-semibold font-['Cabin Condensed'] leading-tight lg:leading-[68px]">
          <span className="text-[#5c5c5c]">{t("Philosophy.text.part1")}</span>
          <span className="text-[#0d519d]">{t("Philosophy.text.part2")}</span>
          <span className="text-[#5c5c5c]">{t("Philosophy.text.part3")}</span>
          <span className="text-[#0d519d]">{t("Philosophy.text.part4")}</span>
          <span className="text-[#5c5c5c]">{t("Philosophy.text.part5")}</span>
          <span className="text-[#0d519d]">{t("Philosophy.text.part6")}</span>
          <span className="text-[#5c5c5c]">{t("Philosophy.text.part7")}</span>
          <span className="text-[#0d519d]">{t("Philosophy.text.part8")}</span>
          <span className="text-[#5c5c5c]">{t("Philosophy.text.part9")}</span>
        </p>
      </div>
      <Link
        to="/contact"
        className="lg:py-4 py-2 my-10 lg:px-8 px-4 bg-[#0e529b] rounded-xl lg:text-xl text-white"
      >
        {t("Philosophy.contactButton")}
      </Link>
    </section>
  );
};

export default Philosophy;

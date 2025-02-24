import logo from "../../public/images/logo.svg";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;

  const socialLinks = [
    { name: t("Footer.socialFacebook"), href: "#", icon: FaFacebookF },
    { name: t("Footer.socialTwitter"), href: "#", icon: RiTwitterXFill },
    { name: t("Footer.socialLinkedIn"), href: "#", icon: FaLinkedinIn },
    { name: t("Footer.socialInstagram"), href: "#", icon: FaInstagram },
  ];

  return (
    <footer
      className={`bg-[#E8F3FF] w-full z-20 px-4 lg:px-[90px] py-12 ${
        locale === "ar" ? "rtl" : "ltr"
      }`}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img
              src={logo}
              alt={t("Footer.logoAlt")}
              className="mb-4 w-[150px]"
            />
            <p className="text-sm text-gray-600 max-w-[300px]">
              {t("Footer.description")}
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    to={social.href}
                    className="w-10 h-10 bg-black rounded-full mx-4 flex items-center justify-center hover:bg-gray-800 transition-colors"
                  >
                    <Icon className="text-white text-lg" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("Footer.servicesTitle")}
            </h3>
            <ul className="space-y-2">
              {(
                t("Footer.servicesItems", {
                  returnObjects: true,
                }) as string[]
              ).map((service) => (
                <li key={service}>
                  <Link
                    to="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("Footer.sectorsTitle")}
            </h3>
            <ul className="space-y-2">
              {(
                t("Footer.sectorsItems", { returnObjects: true }) as string[]
              ).map((sector) => (
                <li key={sector}>
                  <Link
                    to="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {sector}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("Footer.resourcesTitle")}
            </h3>
            <ul className="space-y-2">
              {(
                t("Footer.resourcesItems", { returnObjects: true }) as string[]
              ).map((resource) => (
                <li key={resource}>
                  <Link
                    to="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {resource}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            {t("Footer.bottomCopyright")}
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-sm text-gray-600 hover:text-gray-900">
              {t("Footer.bottomPrivacy")}
            </Link>
            <Link to="#" className="text-sm text-gray-600 hover:text-gray-900">
              {t("Footer.bottomTerms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

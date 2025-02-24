import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./../../public/images/logo.svg"; // Update the path for Vite
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation(); // Use the "Navigation" namespace
  const location = useLocation(); // Get the current path
  const navigate = useNavigate(); // For navigation

  const items = [
    { label: t("Navigation.home"), link: "/" },
    { label: t("Navigation.about"), link: "/about" },
    { label: t("Navigation.services"), link: "/services" },
    { label: t("Navigation.contact"), link: "/contact" },
  ];

  const handleLanguageChange = () => {
    const newLocale = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLocale); // Change the language
    // Optionally, navigate to the same path with the new language
    navigate(location.pathname);
  };

  return (
    <header
      className="
      fixed top-0 left-0 w-full 
      bg-white/30 
      backdrop-blur-md 
      border-b border-white/20
      z-30
    "
    >
      <div className="flex items-center justify-between px-4 py-1 lg:py-3 lg:px-[120px]">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt={t("logoAlt")} className="lg:w-[80px] w-[40px]" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center justify-between px-[120px] pb-2">
          <ul className="flex gap-4 items-center">
            {items.map((item, idx) => (
              <li
                key={idx}
                className={`cursor-pointer hover:underline hover:text-blue-600 ${
                  location.pathname === item.link
                    ? "text-blue-600 underline font-semibold"
                    : ""
                }`}
              >
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {/* Language Switcher Button */}
          <button
            onClick={handleLanguageChange}
            className="px-3 hidden lg:block py-1 rounded-md bg-[#0D519D] text-white hover:bg-blue-700 transition-colors"
          >
            {i18n.language === "en" ? "العربية" : "English"}
          </button>

          {/* Hamburger (Mobile) */}
          <button
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t("toggleMenu")}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          className="
            lg:hidden 
            bg-white/30 
            backdrop-blur-md 
            shadow-md
          "
        >
          <ul className="flex flex-col px-4 py-4 space-y-2">
            {items.map((item, idx) => (
              <li
                key={idx}
                className={`cursor-pointer hover:underline hover:text-blue-600 ${
                  location.pathname === item.link
                    ? "text-blue-600 underline font-semibold"
                    : ""
                }`}
              >
                <Link to={item.link} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Language Switcher in Mobile Menu */}
            <li>
              <button
                onClick={handleLanguageChange}
                className="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                {i18n.language === "en" ? "عربي" : "English"}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;

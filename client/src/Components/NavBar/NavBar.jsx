import { Link } from "react-router-dom";
import Scroll from "../Scroll/Scroll";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../contextAPI/ThemeContext";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

const NavBar = ({ children }) => {
  const { t } = useTranslation();
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav
      className={`dark-mode ${darkMode ? "bg-black text-white" : "bg-blue-900"
        }`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-10 w-auto" src='https://res.cloudinary.com/drpge2a0c/image/upload/v1697553463/assets/logo2sinfond0_od1ox8.png' alt="Logo" />
            </div>

            <div className="hidden sm:flex items-center ml-4">
              <Scroll />
            </div>
            <div className="ml-auto">
              <button
                onClick={toggleDarkMode}
                className="p-2 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                {darkMode ? (
                  <FaRegSun className="inline-block text-yellow" />
                ) : (
                  <FaRegMoon className="inline-block text-white" />
                )}
              </button>
            </div>
            <div className="ml-auto">
              <LanguageSwitcher />
            </div>
          </div>

          <div className="ml-auto">
            <Link to="/login">
              <a
                href="#"
                className="text-white hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-sm font-medium"
                style={{ fontFamily: "Rubik, sans-serif" }}>
                {t("LANDING PAGE.NAVBAR.LOGIN")}
              </a>
            </Link>
          </div>
        </div>
      </div>

      {children}
    </nav>
  );
};

export default NavBar;

/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logo2 from "../../assets/logo2sinfond0.png";
import Scroll from "../Scroll/Scroll";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const NavBar = ({ children }) => {
  const { t } = useTranslation();

  return (
    <nav className="bg-blue-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-10 w-auto" src={logo2} alt="Logo" />
            </div>

            {/* Botones del componente Scroll con un margen izquierdo de 4 */}
            <div className="hidden sm:flex items-center space-x-4 ml-4">
              <Scroll />
            </div>
            <div className="ml-[450px]">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Botón de Login */}
          <div className="ml-auto">
            <Link to="/login">
              <a
                href="#"
                className="text-white hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-sm font-medium"
                style={{ fontFamily: "Rubik, sans-serif" }}
              >
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

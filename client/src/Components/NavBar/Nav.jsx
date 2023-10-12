import { Link } from "react-router-dom";
import logo2 from "../../assets/logo2sinfond0.png";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Nav = () => {
  const { t } = useTranslation();

  return (
    <nav className="bg-blue-900 text-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link to="/home" className="flex flex-shrink-0 items-center">
              <img className="h-10 w-auto" src={logo2} alt="Logo" />
            </Link>

            <div className="ml-8 flex items-center justify-center">
              <Link to="/home">
                <a
                  href="#"
                  className="hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 font-medium text-sm"
                  style={{
                    fontFamily: "Rubik, sans-serif",
                  }}>
                  {t("NAV.HOME BUTTON")}
                </a>
              </Link>
            </div>
          </div>
          <div className="ml-[140px]">
            <LanguageSwitcher />
          </div>
          <div className="text-center ml-5 bg-blue-100 text-blue-900 rounded-full w-[150px] h-[40px] flex justify-center items-center">
            <h1 className="font-bold"> {t("NAV.HEALTHPLUS")}</h1>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

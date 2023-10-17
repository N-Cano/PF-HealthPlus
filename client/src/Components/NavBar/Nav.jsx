import { Link } from "react-router-dom";
import logo3 from "../../assets/logo2sinfond0.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { UserAuth } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTheme } from "../../contextAPI/ThemeContext";
import { FaRegSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

const Nav = () => {
  const { t } = useTranslation();
  const { darkMode, toggleDarkMode } = useTheme();

  const navigate = useNavigate();
  const { signOutWithGoogle } = UserAuth();
  const [user, setUser] = useState(null); // Estado local para el usuario autenticado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logOutWithGoogle = async () => {
    try {
      await signOutWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  // Observador de cambios de autenticación de Firebase
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // Usuario autenticado, establecer el estado local
        setUser(authUser);
      } else {
        // Usuario no autenticado, redirigir a la página de inicio de sesión u otra acción
        navigate("/");
      }
    });

    // Limpia el observador cuando el componente se desmonta
    return () => unsubscribe();
  }, [navigate]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav
      className="bg-blue-900 text-white"
      style={{ background: darkMode ? "black" : "" }}
    >
      {/* {console.log(user)} */}
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-10 w-auto" src={logo3} alt="Logo" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Contenedor de botones del componente Scroll */}
                <div className="flex items-center space-x-4 ml-auto ">
                  {/* Botones del componente Scroll */}
                </div>

                <div className="flex items-center">
                  <Link to="/home">
                    <a
                      href="#"
                      className="text-white hover:bg-gray-700 hover:text-white rounded-md px-4 py-2 text-sm font-medium"
                      style={{ fontFamily: "Rubik, sans-serif" }}
                    >
                      {t("NAV.HOME BUTTON")}
                    </a>
                  </Link>
                  <div className="ml-auto">
                    <button
                      onClick={toggleDarkMode}
                      className="p-2 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      {darkMode ? (
                        <FaRegSun className="inline-block text-yellow" />
                      ) : (
                        <FaRegMoon className="inline-block text-white" />
                      )}
                    </button>
                  </div>
                  <div className="mr-[450px]">
                    <LanguageSwitcher />
                  </div>

                  <div className="flex items-center">
                    <h3
                      className="-ml-5 font-semibold"
                      style={{ fontFamily: "Rubik, sans-serif" }}
                    >
                      {t("NAV.WELCOME")}, <br />
                      {user ? user.displayName || user.email : ""}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative ml-auto">
            <div>
              <button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={toggleMenu}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                />
              </button>
            </div>

            {/* Muestra el menú solo si isMenuOpen es true */}
            {isMenuOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg"
                style={{
                  background: darkMode ? "#00519C" : "",
                  color: darkMode ? "white" : "black",
                }}
              >
                <Link to="/profile">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm  hover:bg-gray-100 hover:text-black"
                  >
                    {t("NAV.LOGIN.PROFILE")}
                  </a>
                </Link>
                <Link to="/myDates">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-black"
                  >
                    {t("NAV.LOGIN.DATES")}
                  </a>
                </Link>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm  hover:bg-gray-100 hover:text-black"
                  onClick={logOutWithGoogle}
                >
                  {t("NAV.LOGIN.LOG OUT")}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
